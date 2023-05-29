import React from 'react';
import './Weather.css';
import {ReactComponent as WeatherImg} from '../../assets/Weather_img.svg';

/* Data is hard coded now but should be changed later */

export default function Weather() {
  return (
    <div className="weather">
      <p className="weather__date">26/11</p>
      <div className="weather__img"><WeatherImg /></div>
      <p className="weather__degrees">13°</p>
    </div>
  )
}
