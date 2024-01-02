import { useEffect, useState } from 'react'
import './App.css'
import { WeatherNow } from './components/WeatherNow'
import { DetailsNow } from './components/DetailsNow'
import { Daily } from './components/Daily'
import { Hourly } from './components/Hourly'
import { Loading } from './components/Loading'
import {SearchBar} from './components/SearchBar'

function App() {
  console.log('initializing')
  const [weather, setWeather] = useState(undefined)
  const [locQuery, setLocQuery] = useState('auto:ip')
  console.log(locQuery)
  const [locDisplay, setLocDisplay] = useState('Austin')
  const backupLoqQuery = 'Austin'
  const [pal, setPal] = useState({
    bg:'#E6E5E2',
    card:'#E6E5E2',
    accent: '#000000',
    text: '#000000'
  })

  const sunnyPal = {
    bg:'#F6D150',
    card:'#E6E5E2',
    accent: '#000000',
    text: '#000000'
  }
  const cloudyPal = {
    bg:'#E6E5E2',
    card:'#E6E5E2',
    accent: '#000000',
    text: '#000000'
  }
  const rainyPal = {
    bg:'#5d6979',
    card:'#1c1c1c',
    accent: '#E6E5E2',
    text: '#E6E5E2'
  }
  const nightPal = {
    bg:'#1c1c1c',
    card:'#1c1c1c',
    accent: '#E6E5E2',
    text: '#E6E5E2'
  }

  const [loc, setLoc] = useState({
    lat:null,
    long:null
  })

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
        method: 'POST',
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
    return (
      <div className='app-container' >
        <SearchBar locQuery={locQuery} setLocQuery={setLocQuery} locDisplay={locDisplay} setLocDisplay={setLocDisplay}/>
        <div className='line1'>
          <WeatherNow weather={weather} />
          {/* <div className='line1-br'></div> */}
          <DetailsNow weather={weather} />
        </div>
        <div className='line2'>
          <Daily weather={weather}/>
          <Hourly weather={weather}/>
        </div>
      </div>
    )
  } else {
    return(
      <Loading />
    )
  }
  
}

export default App
