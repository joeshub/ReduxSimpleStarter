import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempreture</th>
            <th>Pressure</th>
            <th>Humudity</th>
          </tr>
        </thead>
        <tbody>

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
