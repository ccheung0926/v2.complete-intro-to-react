import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'
import axios from 'axios'

export function setSearchTerm (searchTerm) {
  /* { searchTerm } = { searchTerm: searchTerm in ES6 } */
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addOMDBData (imdbID, addomdbData) {
  return { type: ADD_OMDB_DATA, imdbID, addomdbData }
}

export function getOMDBDetails (imdbID) {
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
    .then((response) => {
      dispatch(addOMDBData(imdbID, response.data))
    })
    .catch((error) => {
      console.error('axios error', error)
    })
  }
}
