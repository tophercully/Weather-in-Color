import React, {useState} from "react";
import { Daily } from "./Daily";
import { Hourly } from "./Hourly";
import './Forecast.css'
import { Toggle } from "./Toggle";
import './Toggle.css'

export const Forecast = (props) => {
  const {weather} = props
  const [forecast, setForecast] = useState({
    checked: false,
    name: 'Daily',
    opposite: 'Hourly'
  })

  const [test, setTest] = useState('false')
  

  function ForecastNow() {
    if(forecast.name == 'Daily') {
      return(
        <Daily weather={weather} />
      )
    } else {
      return(
        <Hourly weather={weather} />
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

 function Signal() {
  if(test) {
    return(
      <p>its true</p>
    )
  } else {
    return(
      <p>nvm</p>
    )
  }
 }




  return(
    <div className="forecast">

      {/* <Signal/> */}
      <div className="togglebox">
        {/* <p onClick={handleToggle}>{forecast.opposite}</p> */}
        {/* <input type="checkbox" id="toggle" onChange={handleToggle}></input> */}
        <label className="switch">
            <input type="checkbox" checked={forecast.checked} id="forecast-toggle" onChange={handleToggle}/>
            <span className="slider">{forecast.name}</span>
        </label>
      </div>
      
      <ForecastNow />
      
    </div>
  )
}