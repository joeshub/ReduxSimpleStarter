import { combineReducers } from 'redux'
import WeatherReducer from './reducer_weather'

// import all of our reducers and combine them into root
// the key 'weather' is what ends up in state of containers
const rootReducer = combineReducers({
  weather: WeatherReducer
})

export default rootReducer
