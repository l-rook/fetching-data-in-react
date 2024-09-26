// src/App.jsx
import { useState } from 'react'
import { useEffect } from 'react';
import * as weatherService from './services/weatherService'
import WeatherSearch from './components/WeatherSearch';
import WeatherDetails from './components/WeatherDetails';

const App = () => {

  const [cityWeather, setCityWeather] = useState({})

  useEffect(() => {
    console.log('use effect is running')
    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setCityWeather(newWeatherState);
    };

    // Call the fetch function when the page loads:
    fetchDefaultData();
  }, [])

  async function fetchData(city) {
    const data = await weatherService.show(city)   
    console.log('Data: ', data) 
    setCityWeather({
      location: data.location.name,
      currentTemp: data.current.temp_f,
      currentCondition: data.current.condition.text,
      icon: data.current.condition.icon
    })
  }



  return (
    <main>
      < WeatherSearch fetchData={fetchData}/>
      <WeatherDetails cityWeather={cityWeather}/>
    </main>
  );
}

export default App
