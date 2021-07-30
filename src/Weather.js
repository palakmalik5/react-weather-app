import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
    const [weatherData, setweatherData] = useState({ready: false});
    
    function handleResponse(response){
        console.log(response.data);
       setweatherData({
           ready: true,
         temperature: response.data.main.temp,
         humidity: response.data.main.humidity,
         description: response.data.weather[0].description,
         date: new Date(response.data.dt * 1000),
         iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
         wind: response.data.wind.speed,
         city: response.data.name,
       });
    }

if(weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="type a city..."
                className="form-control"
              />
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className=" search btn btn-primary w-100"
                />
              </div>
            </div>
          </div>
        </form>
        <h3>{weatherData.city}</h3>
        <ul>
          <li><FormattedDate date={weatherData.date} /></li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className=" col-6">
            <img src={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">℃|℉</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
} else {
    const apiKey = "4c4354034cf1207d77d642488c56f07c";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}  
}