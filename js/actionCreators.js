import { SET_SEARCH_TERM } from './actions'

export function setSearchTerm (searchTerm) {
{ /*{ searchTerm } = { searchTerm: searchTerm in ES6 }*/ }
  return { type: SET_SEARCH_TERM, searchTerm }
  }
}