import React from 'react';
import './Weather.css';
import {ReactComponent as WeatherImg} from '../../assets/Weather_img.svg';

/* Data is hard coded now but should be changed later */

export default function Weather() {
  return (
    <div class="weather">
      <p class="weather__date">26/11</p>
      <div class="weather__img"><WeatherImg /></div>
      <p class="weather__degrees">13°</p>
    </div>
  )
}
