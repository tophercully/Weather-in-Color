import React from "react";
import './DetailsNow.css'

export const DetailsNow = (props) => {
    const {weather, isMetric} = props

    const humidity = weather ? weather.current.humidity : ''
    let windSpd = weather ? weather.current.wind_mph : ''
    let perHour = ' mph'
    if(isMetric == true) {
        windSpd = weather ? weather.current.wind_kph : ''
        perHour = ' kph'

    }
    const windDir = weather ? weather.current.wind_dir : ''
    const condition = weather ? weather.current.condition.text : ''
    const cloudCover = weather ? weather.current.cloud : ''
    const uv = weather ? weather.current.uv : ''
    // const name = weather ? weather.location.name : undefined

    const dot = '\u25AA'

    return (
        <div className="now-card-detail">
            <span className="detail">
                <h2>{weather ? 'Humidity' : ''}</h2>
                <h4>{dot}</h4>
                <h4>{weather ? humidity +'%': ''}</h4>
            </span>
            <span className="detail">
                <h2>{weather ? 'Wind' : ''}</h2>
                <h4>{dot}</h4>
                <h4>{weather ? windDir + ' ' + windSpd+ perHour: ''}</h4>
            </span>
            <span className="detail">
                <h2>{weather ? 'Cloud Cover' : ''}</h2>
                <h4>{dot}</h4>
                <h4>{weather ? cloudCover + '%': ''}</h4>
            </span>
            <span className="detail">
                <h2>{weather ? 'UV' : ''}</h2>
                <h4>{dot}</h4>
                <h4>{weather ? uv + '%': ''}</h4>
            </span>
            
        </div>
    )
}