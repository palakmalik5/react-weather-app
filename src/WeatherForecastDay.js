import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;
    }
    function minTemperature() {
      let temperature = Math.round(props.data.temp.min);
      return `${temperature}`;
    }

    function day() {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return days[day];
    }

    return(
        <div>
        <div className="Weatherforecast-day">{day()}</div>
            <WeatherIcon code={props.data[0].weather[0].icon} size={36} />
            <div className="Weatherforecast-temperatures">
              <span className="Weatherforecast-temperature-max">
                {maxTemperature()}°
              </span>
              <span className="Weatherforecast-temperature-min">{minTemperature()}°
              </span>
            </div>
        </div>
    );
}