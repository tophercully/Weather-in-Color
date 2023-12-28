import { useEffect, useState } from 'react'
import './App.css'
import { WeatherNow } from './components/WeatherNow'
import { Daily } from './components/Daily'
import { ConditionCard } from './components/ConditionCard'
import { DetailsNow } from './components/DetailsNow'
import { Hourly } from './components/Hourly'

function App() {

  const [weather, setWeather] = useState(undefined)
  const [pal, setPal] = useState({
    bg:'#E6E5E2',
    card:'#E6E5E2',
    accent: '#000000',
    text: '#000000'
  })

  const [loc, setLoc] = useState({
    lat:null,
    long:null
  })

  useEffect(() => {
    const nav = navigator.geolocation.getCurrentPosition((locate) => {
      setLoc({
          lat:locate.coords.latitude,
          long: locate.coords.longitude
      })
      
      // console.log(locate.coords)
    })
    const response = fetch(('https://api.weatherapi.com/v1/forecast.json?key=436a61609495450790e215740232712&q='+'Austin'+'&days=7'), {
      method: 'POST',
      headers:{ 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(data => setWeather(data))

    // const responseForecast = fetch(('https://api.weatherapi.com/v1/forecast.json?key=436a61609495450790e215740232712&q='+'Austin'+'&days=7'), {
    //   method: 'POST',
    //   headers:{ 'Content-Type': 'application/json' },
    // })
    // .then(response => response.json())
    // .then(data => setForecast(data))
    

    

    if(weather) {
      let condition = weather.current.condition.text
      if(condition == 'Sunny' || condition == 'Clear') {
        setPal({
          ...pal,
          bg: '#BBD2F5'//'#F6D150'
          
        })
      }
    }

    
    
  }, [])

  // console.log(pal)
  let root = document.documentElement;
  root.style.setProperty("--bg", pal.bg);
  root.style.setProperty("--card", pal.card);
  root.style.setProperty("--accent", pal.accent);
  root.style.setProperty("--text", pal.text);
  if(weather) {
    // console.log(weather.forecast.forecastday[0])

  }

  return (
    <div className='app-container'>
      <div className='line1'>
        <WeatherNow weather={weather} />
        <div className='line1-br'></div>
        <DetailsNow weather={weather} />
      </div>
      <div className='line2'>
        <Daily weather={weather}/>
        <Hourly weather={weather}/>
      </div>
      {/* <ConditionCard dayIndex='1' weather={weather} /> */}
    </div>
  )
}

export default App
