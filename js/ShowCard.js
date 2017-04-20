import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const ShowCard = React.createClass({
  // shape is an object to describe the shape of it
  // and we are defining prop type that we are returning
  propTypes: {
    poster: string,
    title: string,
    year: string,
    description: string,
    imdbID: string
  },
  render () {
    const { poster, title, year, description, imdbID } = this.props
    return (
      <Link to={`/details/${imdbID}`}>
        <div className='show-card'>
          {/* this.props.show.poster = example.jpg */}
          <img src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <h4>{year}</h4>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
})
export default ShowCard
