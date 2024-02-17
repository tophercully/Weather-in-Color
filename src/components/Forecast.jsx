import React, {useState} from "react";
import { Daily } from "./Daily";
import { Hourly } from "./Hourly";
import './Forecast.css'
import { Toggle } from "./Toggle";
import './Toggle.css'

export const Forecast = (props) => {
  const {weather, isMetric} = props
  const [forecast, setForecast] = useState({
    checked: false,
    name: 'Daily',
    opposite: 'Hourly'
  })

  const [test, setTest] = useState('false')
  

  function ForecastNow() {
    if(forecast.name == 'Daily') {
      return(
        <Daily weather={weather} isMetric={isMetric}/>
      )
    } else {
      return(
        <Hourly weather={weather} isMetric={isMetric}/>
      )
    }
  }

  function handleToggle() {
    // var check = e.target.checked
    if(forecast.checked == false) {
      setForecast({
        ...forecast,
        checked: true,
        name:'Hourly',
        opposite: 'Daily'
      })
    } else {
      setForecast({
        ...forecast,
        checked: false,
        name:'Daily',
        opposite: 'Daily'
      })
    }
  }

  function makeDaily(){
    setForecast({
      ...forecast,
      checked: false,
      name:'Daily',
      opposite: 'Daily'
    })
  }
  function makeHourly(){
    setForecast({
        ...forecast,
        checked: true,
        name:'Hourly',
        opposite: 'Daily'
      })
  }

  



 


  return(
    <div className="forecast">
      <div className="togglebox">
        <label className="toggle-label">
          <p className="forecast-title">Daily</p>
          <input type="radio" name="forecast" className="forecast-toggle" defaultChecked='unchecked' onClick={makeDaily}/>
        </label>
        <label className="toggle-label">
          <p className="forecast-title">Hourly</p>
          <input type="radio" name="forecast" className="forecast-toggle" defaultChecked='checked' onClick={makeHourly}/>
        </label>
      </div>
      
      <ForecastNow />
      
    </div>
  )
}