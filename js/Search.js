import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        <header>
          <h1>svideo</h1>
          <input type='text' placeholder='Search' />
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
