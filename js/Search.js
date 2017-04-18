import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'this is the default string'
    }
  },
  handleSearchTermChange (event){
    // use this.setState all time
    this.setState({searchTerm: event.target.value}) //<-- this.setState is an asynchronous functions that is going to schdule an update and eventually, it is going to empty that buffer into one setState, so only updating the bare minimum of things possible to keep your app performing
    // or this.state.searchTerm = event.target.value -- but this will cause the state and UI are not in sync, and the broswer does not re-render coz no one is watching
    // this.forceUpdate() -- update right now
  },
  render () {
    return (
      <div className='search'>
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input onChange={this.handleSearchTermChange} type='text' placeholder='Search' value={this.state.searchTerm} />
        </header>
        {preload.shows.map((show) => {
          return (
            <ShowCard key={show.imdbID} {...show} />
          )
        })}
      </div>
    )
  }
})

export default Search
