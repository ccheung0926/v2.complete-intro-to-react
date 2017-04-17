import React from 'react'
import { render } from 'react-dom'
const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>svideo</h1>
          <input type='text' placeholder='Search' />
          <a>or Broswer All</a>
        </div>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
