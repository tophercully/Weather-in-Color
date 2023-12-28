import React from "react";
import './WeatherNow.css'

export const WeatherNow = (props) => {
    const {weather} = props
    const name = weather ? weather.location.name : ''
    const region = weather ? weather.location.region : ''
    const temp = weather ? weather.current.temp_f : ''
    const feelsLike = weather ? weather.current.feelslike_f : ''
    const icon = weather ? 'sunny.svg' : ''
    const condition = weather ? weather.current.condition.text : ''
    // const name = weather ? weather.location.name : undefined

    return (
        <div className="now-card">
            <img src={icon} className="weatherIcon"></img>
            <h1 className="temp">{weather ? Math.round(temp)+'°F' : ''}</h1>
            <div className="temp-break"></div>
            <h2>{weather ? 'Feels like ' + Math.round(feelsLike)+'°' : ''}</h2>
            <h2>{weather ? name +', '+ region : ''}</h2>
        </div>
    )
}