import { useEffect, useState } from 'react'
import './App.css'
import './components/Background.css'
import { WeatherNow } from './components/WeatherNow'
import { DetailsNow } from './components/DetailsNow'
import { Loading } from './components/Loading'
import {SearchBar} from './components/SearchBar'
import { Forecast } from './components/Forecast'
import './components/Toggle.css'
import { Sun } from './components/Sun'
import { Background } from './components/Background'

function App() {
  const [weather, setWeather] = useState(undefined)
  const [locQuery, setLocQuery] = useState('auto:ip')
  const [locDisplay, setLocDisplay] = useState('Austin')

  const [isMetric, setIsMetric] = useState(false)
 
  const backupLoqQuery = 'Austin'
  const white =  '#FFFDF7'

  
  const sunnyPal = {
    bg:'#F4EBE1',
    card:white,
    accent: '#F36336',
    text: '#000000',
    primary: '#fc7e10',
    secondary: '#48a0f9'
  }
  const cloudyPal = {
    bg:white,
    card:white,
    accent: '#5484CB',
    text: '#000000',
    primary: '#0a0a0a',
    secondary: '#555555'
  }
  const rainyPal = {
    bg:'#5d6979',
    card:'#1c1c1c',
    accent: '#d7d7d7',
    text: '#f5f5f5',
    primary: '#0a0a0a',
    secondary: '#555555'
  }
  const nightPal = {
    bg:'#2e2e2e',
    card:'#0a0a0a',
    accent: '#d7d7d7',
    text: white,
    primary: '#d7d7d7',
    secondary: '#555555'
  }

  // console.log('day?', i)

  const invertIcons = () => {
    document.getElementById('weather-icon').style.filter="invert(100%)"
    const icons = document.getElementsByClassName('water-drop')
    console.log(icons)
    for(var i = 0; i < icons.length; i++) {
        icons[i].style.filter = "invert(100%)"
        // console.log('flipped')
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
      const toSet = await grabWeather()
      setWeather(toSet)

    }
    handleWeather()
  }, [locQuery])

  useEffect(()=>{
    if(weather){// manage color scheme
    let palNow = sunnyPal
    if(weather.current.is_day == 1 && weather.current.cloud > 10) {
      palNow = cloudyPal
    } else if(weather.current.precip_in > 0 && weather.forecast.forecastday[0].astro.is_sun_up == true) {
      palNow = rainyPal
      invertIcons()
    } 
    
    if(weather.current.is_day == 0) {
      palNow = nightPal
      invertIcons()
    }

 
    
    document.documentElement.style.setProperty("--bg", palNow.bg);
    document.documentElement.style.setProperty("--card", palNow.card);
    document.documentElement.style.setProperty("--accent", palNow.accent);
    document.documentElement.style.setProperty("--text", palNow.text);
    document.documentElement.style.setProperty("--primary", palNow.primary);
    document.documentElement.style.setProperty("--secondary", palNow.secondary);

    setLocDisplay(weather.location.name)}
  }, [weather])

  function handleToggle(e) {
    setIsMetric((prev)=>{
      return !prev
    })
  }
  


  if(weather) {
    if(weather.current) {
      return (
        <div className='app-container' >
          <Background locDisplay={locDisplay}/>
          <br></br>
          <div className='line1'>
            <WeatherNow weather={weather} isMetric={isMetric}/>
            <DetailsNow weather={weather} isMetric={isMetric}/>
          </div>
          <div className='search-and-toggle'>
            <div className="metric-switch" onClick={handleToggle}>
            <p className='metric-switch-text'>
              {isMetric ? ' °F' : '°C'}
            </p>
            </div>
            <SearchBar locQuery={locQuery} setLocQuery={setLocQuery} locDisplay={locDisplay} setLocDisplay={setLocDisplay} isMetric={isMetric} setIsMetric={setIsMetric}/>
          </div>

          
          <div className='line2'>
            <Forecast weather={weather} isMetric={isMetric}/>
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
