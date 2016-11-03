import axios from 'axios'

const API_KEY = '7c5c71f71246b25115bed03244badcf7'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// action names avoid naming collisions
export const FETCH_WEATHER = 'FETCH_WEATHER'

// this action creator takes a city name and returns a promise
export function fetchWeather (city) {

  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  console.log('action Request: ', request)

  // axios returns a promise via payload here
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
