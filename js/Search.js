import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    // use this.setState all time
    this.setState({searchTerm: event.target.value}) // <-- this.setState is an asynchronous functions that is going to schdule an update and eventually, it is going to empty that buffer into one setState, so only updating the bare minimum of things possible to keep your app performing
    // or this.state.searchTerm = event.target.value -- but this will cause the state and UI are not in sync, and the broswer does not re-render coz no one is watching
    // this.forceUpdate() -- update right now
  },
  render () {
    return (
      <div className='search'>
        {/* showSearch=true by default */}
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => {
              return (
                <ShowCard key={show.imdbID} {...show} />
              )
            })}
        </div>
      </div>
    )
  }
})

export default Search
