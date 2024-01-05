import React, {useState} from "react";
import { Daily } from "./Daily";
import { Hourly } from "./Hourly";
import './Forecast.css'

export const Forecast = (props) => {
    const {weather} = props
    const [forecast, setForecast] = useState({
        id: 1,
        name: 'Daily',
        opposite: 'Hourly'
      })

    function ForecastNow() {
        if(forecast.id) {
          return(
            <Daily weather={weather} />
          )
        } else {
          return(
            <Hourly weather={weather} />
          )
        }
      }
    
      function toggleForecast() {
        if(forecast.id) {
          setForecast({
            ...forecast,
            id:0,
            name:'Hourly',
            opposite:'Daily'
          })
        } else {
          setForecast({
            ...forecast,
            id:1,
            name:'Daily',
            opposite: 'Hourly'
          })
        }
      }

    return(
        <div className="forecast">
            <label className="forecastToggle" onClick={toggleForecast}>
                <p>toggle</p>
            </label>
            
            <ForecastNow />
        </div>


    )
}