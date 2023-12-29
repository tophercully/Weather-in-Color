import React, {useEffect, useState} from "react";
import './WeatherNow.css'

export const WeatherNow = (props) => {
    const {weather} = props
    const name = weather ? weather.location.name : ''
    const region = weather ? weather.location.region : ''
    const temp = weather ? weather.current.temp_f : ''
    const feelsLike = weather ? weather.current.feelslike_f : ''
    const [icon, setIcon] = useState('')
    const condition = weather ? weather.current.condition.text : ''

    //status conditionals
    const partlyCloudy = weather? (weather.current.cloud > 0 && weather.current.cloud <= 50 ? true : false) : ''
    const cloudy = weather? (weather.current.cloud > 50 ? true : false) : ''
    const raining = weather? (weather.current.precip_in > 0 ? true : false) : ''

    useEffect((a) => {
        if(partlyCloudy && weather) {
            setIcon('partlyCloudy.svg')
        }
        if(cloudy && weather) {
            setIcon('cloudy.svg')
        }
        if(raining && weather) {
            setIcon('rainy.svg')
        }
        if(!raining && !cloudy && !partlyCloudy && weather) {
            setIcon('sunny.svg')
        }

    }, [weather])
    
    

    return (
        <div className="now-card">
            <img src={icon} className="weatherIcon"></img>
            <h2>{weather ? condition : ''}</h2>
            <h1 className="temp">{weather ? Math.round(temp)+'°F' : ''}</h1>
            <div className="temp-break"></div>
            <h2>{weather ? 'Feels like ' + Math.round(feelsLike)+'°' : ''}</h2>
            <h2>{weather ? name : ''}</h2>

        </div>
    )
}