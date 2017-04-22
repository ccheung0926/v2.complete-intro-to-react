// make our require transpiles to babel
// this file itself is not transpiled, so we have to write it in such a way that we don't require babel. Babel node is very slow in production. Don't use it!
require('babel-regiester')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
const _ = require('lodash')
const fs = require('fs')
const PORT = 5050
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const App = require('./js/App').default

const server = express()

server.use('/public', express.static('./public'))


server.use((req, res) => {
  // createServerRenderContext() --> V4 ReactRouter server side rendering, it has two pass system. It is going to try and render once. If any one side of that you render a redirect or you render a miss. It is going to return to this context..
  const context = ReactRouter.createServerRenderContext()
  const body = ReactDOMServer.renderToString(
    React.createElement(ServerRouter, {location: req.url, context: context}, React.createElement(App))
  )
  // equals to below:
  // <ServerRouter location={req.url} context={context}>
  //  <App />
  // </ServerRouter>

  // take the %body from index.thml %body.. and stick the template right there
  res.write(template({body:body}))
  res.end()
})

console.log('listening on port', PORT)
server.listen(PORT)
