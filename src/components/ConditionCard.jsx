import React from "react";
import './ConditionCard.css'

export const ConditionCard = (props) => {
    const {weather, dayIndex, hourIndex} = props
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let nowName
    let forecast
    let Temp
    let rainChance

    const d = new Date()
    //set up modifiers to handle day overlap
    let dayMod = 0
    let hourMod = 0
    if(d.getHours()+hourIndex > 24) {
        isTomorrow = 1
        hourMod = -24
    }
    
    let hourCode = d.getHours()+hourIndex+hourMod
    let dayCode = d.getDay()+dayIndex+dayMod
    if(dayCode > 6) {
        dayCode -= 7
    }
    const dayName = days[dayCode]
    
    if(props.isDay) {
        nowName = dayName
        forecast = weather ? weather.forecast.forecastday[dayIndex].day : ''
        rainChance = weather ? forecast.daily_chance_of_rain : ''

        Temp = () => {
            return (
                <>
                    <h1>{Math.round(maxTemp)+'°'}</h1>
                    <h3>{'↓'+Math.round(minTemp)+'°'}</h3>
                </>
        )}
    } else {
        forecast = weather ? weather.forecast.forecastday[0].hour[hourIndex] : ''
        nowName = hourCode > 12 ? hourCode-12 + 'pm' : hourCode+'am'
        rainChance = weather ? forecast.chance_of_rain : ''

        Temp = () => {
            return (
                <>
                    <h1>{Math.round(forecast.temp_f)+'°'}</h1>
                </>
        )}

    }
    
    const maxTemp = weather ? forecast.maxtemp_f : ''
    const minTemp = weather ? forecast.mintemp_f : ''
    const thisClass = props.end ? 'condition-card-last' : 'condition-card'


    return(
        <div className="condition-div">
            <div className={thisClass}>
                <h2>{nowName}</h2>
                <Temp/>
                <span className="precipitation-chance">
                    <img src="water-drop.svg" className="water-drop"></img>
                    <h2>{rainChance + '%'}</h2>
                </span>
            </div>
        </div>
    )
}