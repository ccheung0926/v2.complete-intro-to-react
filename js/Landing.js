import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
const { string } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    searchTerm: string
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input value={this.props.searchTerm} type='text' placeholder='Search' />
        <Link to='/search'>or Broswer All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}
/* calling connect with mapStateToProps. Connect creates a new function then immediately invoking on landing */
export default connect(mapStateToProps)(Landing)
