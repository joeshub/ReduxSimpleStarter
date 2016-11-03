// use constants to avoid spelling issues later
import { FETCH_WEATHER } from '../actions/index'

// Reducers are just functions
// First argument is the state that this reducer is responsible for
// Second argument is our action
// This reducer keeps an 'array' of weather data in the redux store
export default function (state = [], action) {
  // debugger
  console.log('reducer action received', FETCH_WEATHER, action)

  switch (action.type) {
  case FETCH_WEATHER:
    // need to return existing data plus the new data
    // never mutate the state, ie state.push
    // always return a new object, ie concat, new instance
    //return state.concat([action.payload.data]) ES6 spread below
    return [ action.payload.data, ...state ]
  }
  return state
}
