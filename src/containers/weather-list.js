import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'

class WeatherList extends Component {

  renderWeather (cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="K"/></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempreture (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humudity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather && this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ weather }) {
  // weather arguemnt gets defined in our function
  // as a variable instead of the (state) object
  // so ({ weather }) is the same as doing (state) then
  // doing const weather = state.weather

  // 'weather' is the key string we assigned in combineReducers
  // { weather : weather } can be written as { weather }
  return {
    weather
  }
}

export default connect(mapStateToProps)(WeatherList)
