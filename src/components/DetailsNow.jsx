import React from "react";
import './DetailsNow.css'

export const DetailsNow = (props) => {
    const {weather} = props

    const humidity = weather ? weather.current.humidity : ''
    const windSpd = weather ? weather.current.wind_mph : ''
    const windDir = weather ? weather.current.wind_dir : ''
    const condition = weather ? weather.current.condition.text : ''
    const cloudCover = weather ? weather.current.cloud : ''
    // const name = weather ? weather.location.name : undefined

    return (
        <div className="now-card-detail">
            <span className="detail">
                <h2>{weather ? 'Humidity' : ''}</h2>
                <h3>{weather ? humidity +'%': ''}</h3>
            </span>
            <span className="detail">
                <h2>{weather ? 'Wind' : ''}</h2>
                <h3>{weather ? windDir + ' ' + windSpd+ 'mph ': ''}</h3>
            </span>
            <span className="detail-end">
                <h2>{weather ? 'Cloud Cover' : ''}</h2>
                <h3>{weather ? cloudCover + '%': ''}</h3>
            </span>
            
        </div>
    )
}