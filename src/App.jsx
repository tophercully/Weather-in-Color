import { useEffect, useState } from 'react'
import './App.css'
import { WeatherNow } from './components/WeatherNow'
import { DetailsNow } from './components/DetailsNow'
import { Loading } from './components/Loading'
import {SearchBar} from './components/SearchBar'
import { Forecast } from './components/Forecast'
import { Sun } from './components/Sun'

function App() {
  const [weather, setWeather] = useState(undefined)
  const [locQuery, setLocQuery] = useState('auto:ip')
  const [locDisplay, setLocDisplay] = useState('Austin')
 
  const backupLoqQuery = 'Austin'
  const white =  '#f5f5f5'
  const sunnyPal = {
    bg:white,
    card:white,
    accent: '#F36336',
    text: '#000000'
  }
  const cloudyPal = {
    bg:white,
    card:white,
    accent: '#5484CB',
    text: '#000000'
  }
  const rainyPal = {
    bg:'#5d6979',
    card:'#1c1c1c',
    accent: white,
    text: white
  }
  const nightPal = {
    bg:'#1c1c1c',
    card:'#1c1c1c',
    accent: white,
    text: white
  }



  const invertIcons = () => {
    document.getElementById('weather-icon').style.filter="invert(100%)"
    const drops = document.getElementsByClassName('water-drop')
    for(var i = 0; i < drops.length; i++) {
        drops[i].style.filter = "invert(100%)"
    }
  }

  useEffect(() => {
    const grabWeather = async() => {
      const response = await fetch(('https://api.weatherapi.com/v1/forecast.json?key=436a61609495450790e215740232712&q='+locQuery+'&days=7'), {
        method: 'GET',
        headers:{ 'Content-Type': 'application/json' },
      })
      const data = await response.json()
      
      return data
    }

    const handleWeather = async() => {
      // const nav = navigator.geolocation.getCurrentPosition((locate) => {
      //   setLoc({
      //     lat:locate.coords.latitude,
      //     long: locate.coords.longitude
      //   })
      // })
      const toSet = await grabWeather()
      setWeather(toSet)

      let palNow = sunnyPal
      if(toSet.current.cloud > 10) {
        palNow = cloudyPal
      } else if(toSet.current.precip_in > 0) {
        palNow = rainyPal
        invertIcons()
      } else if(toSet.forecast.forecastday[0].is_sun_up == 0) {
        palNow = nightPal
        invertIcons()
      } 

      
      document.documentElement.style.setProperty("--bg", palNow.bg);
      document.documentElement.style.setProperty("--card", palNow.card);
      document.documentElement.style.setProperty("--accent", palNow.accent);
      document.documentElement.style.setProperty("--text", palNow.text);

      setLocDisplay(toSet.location.name)
    }
    handleWeather()
  }, [locQuery])


  

  


  if(weather) {
    if(weather.current) {
      return (
        <div className='app-container' >
          <SearchBar locQuery={locQuery} setLocQuery={setLocQuery} locDisplay={locDisplay} setLocDisplay={setLocDisplay}/>
          {/* <Sun weather={weather}/> */}
          <div className='line1'>
            <WeatherNow weather={weather} />
            <DetailsNow weather={weather} />
          </div>
          <div className='line2'>
            <Forecast weather={weather}/>
          </div>
          <br></br>
        </div>
      )
    } else if(weather.error){
      if(weather.error.code == 1003) {

        return(
          <>
          <SearchBar locQuery={locQuery} setLocQuery={setLocQuery} locDisplay={locDisplay} setLocDisplay={setLocDisplay}/>
          <h1>{weather.error.code}</h1>
          <h3>Location not found, please try again</h3>
          </>
          )
      } else {
        return(
          <>
          <SearchBar locQuery={locQuery} setLocQuery={setLocQuery} locDisplay={locDisplay} setLocDisplay={setLocDisplay}/>
          <h3>unknown error</h3>
          </>
          )
      }
    }
  } else {
    return(
      <Loading />
    )
  }
  
}

export default App
