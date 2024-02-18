import { useState } from 'react';
import './App.css';   


function App() { 

  const mockWeatherData = {
    "New York": {
        temperature: "22°C",
        humidity: "56%",
        windSpeed: "15 km/h",
    },
    "Los Angeles": {
        temperature: "27°C",
        humidity: "45%",
        windSpeed: "10 km/h",
    },
    London: {
        temperature: "15°C",
        humidity: "70%",
        windSpeed: "20 km/h",
    },
}

const defaultWeather = {
    temperature: "",
    humidity: "",
    windSpeed: "",
}

const [weather, setWeather] = useState(); 
const [country, setCountry] = useState();
const [prevSearches, setPrevSearches] = useState([]);

const countryHandler = (e) =>{
  setCountry(e.target.value);
  console.log(country);
}

const weatherHandler = () =>{ 
   country ? setWeather(mockWeatherData[country]) : setWeather(defaultWeather);
   if(country && !prevSearches.includes(country)){
    setPrevSearches([...prevSearches, country])
   }
  }

const prevSearchHandler = (search) =>{
  setCountry(search);
  weatherHandler();
}

  return (
    <div className="App"> 
    <input onChange={countryHandler}/>
    <button onClick={weatherHandler}> Search </button> 
     
      {weather && (
        <div>
        <div> Temperature: {weather.temperature}</div>
        <div> Humidity: {weather.humidity} </div>
        </div> 
      )}

      <div>
        Previous Searches:
        {prevSearches.map((search, index)=>(
          <button onClick={()=>prevSearchHandler(search)}> {search} </button>
        
  ))}
      </div>
    </div>
  );
}

export default App;
