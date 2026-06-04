
import React from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";
import { useState } from "react";

const App = () => {
  const [data,setData]=useState({ temperature: 25, conditions: "Sunny" })
  return (
    <div>
        <WeatherDisplay data={data} />
    </div>
  )
}

export default App
