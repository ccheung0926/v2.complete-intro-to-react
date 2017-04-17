import React from 'react'
import { render } from 'react-dom'
import '../public/normalize.css'
import '../public/style.css'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are cool' color='rebeccapurple' />
        <MyTitle title='props are great' color='peru' />
        <MyTitle title='props are awesome' color='red' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))