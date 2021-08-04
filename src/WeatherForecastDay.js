import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.max);
        return `${temperature}`;
    }
    return(
        <div>
        <div className="Weatherforecast-day">{props.data[0].dt}</div>
            <WeatherIcon code={props.data[0].weather[0].icon} size={36} />
            <div className="Weatherforecast-temperatures">
              <span className="Weatherforecast-temperature-max">
                {props.data[0].temp.max}°
              </span>
              <span className="Weatherforecast-temperature-min">{props.data[0].temp.min}°
              </span>
            </div>
        </div>
    );
}