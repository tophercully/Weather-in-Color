import React, {useEffect, useState} from "react";
import './WeatherNow.css'

export const WeatherNow = (props) => {
    const {weather, isMetric} = props
    const name = weather ? weather.location.name : ''
    const region = weather ? (weather.location.region ? ', ' + weather.location.region : '') : ''
    
    let temp = weather ? weather.current.temp_f : ''
    let feelsLike = weather ? weather.current.feelslike_f : ''
    let tempLetter = '°F'
    if(isMetric == true){
        temp = weather ? weather.current.temp_c : ''
        feelsLike = weather ? weather.current.feelslike_c : ''
        tempLetter = '°C'
    }
    const [icon, setIcon] = useState('')
    const condition = weather ? weather.current.condition.text : ''

    //status conditionals
    const partlyCloudy = weather? (weather.current.condition.text.toLowerCase().includes('cloud') && weather.current.cloud <= 50 ? true : false) : ''
    const cloudy = weather? (weather.current.condition.text.toLowerCase().includes('cloud') || weather.current.condition.text.toLowerCase().includes('overcast') ?  true : false) : ''
    const raining = weather? (weather.current.condition.text.toLowerCase().includes('rain') ? true : false) : ''

    useEffect((a) => {
        if(weather) {
            if(weather.current.is_day == 1) {
                if(partlyCloudy) {
                    setIcon('partlyCloudy.svg')
                }
                if(cloudy) {
                    setIcon('cloudy.svg')
                }
                if(raining) {
                    setIcon('rainy.svg')
                }
                if(!raining && !cloudy && !partlyCloudy && weather) {
                    setIcon('sunny.svg')
                }
            } else {
                if(partlyCloudy) {
                    setIcon('partlyCloudyNight.svg')
                }
                if(cloudy) {
                    setIcon('cloudy.svg')
                }
                if(raining) {
                    setIcon('rainy.svg')
                }
                if(!raining && !cloudy && !partlyCloudy && weather) {
                    setIcon('sunny.svg')
                }
            }
        }
        

        // var link = document.createElement('link'),
        // oldLink = document.getElementById('dynamic-favicon');
        // link.id = 'dynamic-favicon';
        // link.rel = 'shortcut icon';
        // link.href = icon;
        // if (oldLink) {
        //     document.head.removeChild(oldLink);
        // }
        // document.head.appendChild(link);

    }, [weather])
    
    

    return (
        <div className="now-card">
            <img src={icon} id="weather-icon" className="weatherIcon"></img>
            <h2>{weather ? condition : ''}</h2>
            <h1 className="temp">{weather ? Math.round(temp)+tempLetter : ''}</h1>
            <div className="temp-break"></div>
            <h2>{weather ? 'Feels like ' + Math.round(feelsLike)+'°' : ''}</h2>
            <h2>{weather ? name+region : ''}</h2>

        </div>
    )
}