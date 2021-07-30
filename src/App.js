import React from "react";
import Weather from "./Weather.js";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
          <footer>
            This project was coded by Palak Malik and is{" "} 
            <a 
              href="https://github.com/palakmalik5/react-weather-app">
              Open-source on Github
            </a>
          </footer> 
      </div>
    </div>
  );
  }
