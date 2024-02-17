import React from "react";
import './ConditionCard.css'

export const ConditionCard = (props) => {
    const {weather, dayIndex, hourIndex, orientation, isMetric} = props
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    let nowName
    let forecast
    let Temp
    let rainChance
    let humidity
    let wind

    let perHour = 'mph'
    if(isMetric == true) {
        perHour = 'kph'
    }
    
    const d = new Date()
    //set up modifiers to handle day overlap

    let dayMod = 0
    let hourMod = 0
    if(d.getHours()+hourIndex > 24) {
        dayMod = 1
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
        forecast = weather && weather.forecast.forecastday[dayIndex] ? weather.forecast.forecastday[dayIndex].day : ''
        
        rainChance = weather ? forecast.daily_chance_of_rain : ''
        humidity = weather ? forecast.avghumidity : ''
        wind = weather ? forecast.maxwind_mph : ''
        if(isMetric == true) {
            wind = weather ? forecast.maxwind_kph : ''
        }

        Temp = () => {
            return (
                <div className="tempBubble">
                    <h1 className="tempDisplay">{Math.round(maxTemp)+'°'}</h1>
                    <h3 className="low">{'↓'+Math.round(minTemp)+'°'}</h3>
                </div>
        )}
    } else {
        nowName = hourCode > 12 ? hourCode-12 + 'pm' : hourCode+'am'
        forecast = weather ? weather.forecast.forecastday[0].hour[hourIndex] : ''
        rainChance = weather ? forecast.chance_of_rain : ''
        humidity = weather ? forecast.humidity : ''
        wind = weather ? forecast.wind_dir+' '+forecast.wind_mph : ''
        let hourlyTemp = weather ? forecast.temp_f : ''
        if(isMetric == true) {
            wind = weather ? forecast.wind_dir+' '+forecast.wind_kph : ''
            hourlyTemp = weather ? forecast.temp_c : ''
        }

        Temp = () => {
            return (
                <div className="tempBubble">
                    <h1 className="tempDisplay">{Math.round(hourlyTemp)+'°'}</h1>
                    <br></br>
                </div>
        )}

    }
    
    let maxTemp = weather ? forecast.maxtemp_f : ''
    let minTemp = weather ? forecast.mintemp_f : ''
    if(isMetric == true) {
        maxTemp = weather ? forecast.maxtemp_c : ''
        minTemp = weather ? forecast.mintemp_c : ''
    }

    function Main() {
        return(
            <div className="condition-card-main">
                <h2 className="now">{nowName}</h2>
                <Temp/>
            </div>
        )
    }
    function Detail() {
        return(
            <div className="condition-card-detail">
                <span className="detail-span">
                    <img src="rainchance.svg" className="water-drop" id="water-drop"></img>
                    <h2>{rainChance + '%'}</h2>
                </span>
                <span className="detail-span">
                    <img src="water-drop.svg" className="water-drop" id="water-drop"></img>
                    <h2>{humidity + '%'}</h2>
                </span>
                <span className="detail-span">
                    <img src="wind.svg" className="water-drop" id="water-drop"></img>
                    <h2>{wind+perHour}</h2>
                </span>
             
            </div>
        )
    }

    function Card() {
        if(orientation==1) {
            return(
                <div className="condition-card">
                    <div className="cc-left">
                        <div className="pad"></div>
                        <Main/>
                        <div className="br-horiz-left"></div>
                    </div>
                    {/* <div className="br-line"></div> */}
                    <div className="cc-right-detail">
                        <Detail/>
                    </div>
                </div>
                )
        } else {
            return(

                <div className="condition-card">
                    <div className="cc-left">
                        <Detail/>
                    </div>
                    {/* <div className="br-line"></div> */}
                    <div className="cc-right">
                        
                        <div className="br-horiz-right"></div>
                        <Main/>
                        <div className="pad"></div>
                    </div>
                </div>
                )
        }
    }


    return(
        <Card />
       
    )
}