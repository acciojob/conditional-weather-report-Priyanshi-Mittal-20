import React from 'react'

const WeatherDisplay = ({data}) => {
  return (
    <div>
      <span
        style={{
          color: data.temperature > 20 ? "red" : "blue"
        }}
      >
        <p>Temperature: {data.temperature}</p>
      </span>

      <p>Conditions: {data.conditions}</p>
    </div>
  );

}

export default WeatherDisplay
