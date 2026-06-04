import React from 'react'

const WeatherDisplay = ({data}) => {
  return (
    <div>
      <span>
        {data.temperature>20 ? <p style={{color:"red"}}>{data.temperature}</p> : <p style={{color:"blue"}}>{data.temperature}</p> }
      </span>
      <p>{data.conditions}</p>
    </div>
  )
}

export default WeatherDisplay
