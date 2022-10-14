import React from 'react';
import './StartScreen.css';
import logo from '../../assets/Logo.png';

export default function StartScreen() {
  return (
    <div class="start-screen">
      <img class="start-screen__logo" src={logo} alt="FlyLight logo"/>
      <h1 class="start-screen__title">FlyLight</h1>
      <p class="start-screen__description">An app that rewards flyers who pack lighter as their way to help reduce carbon emissions and fly more sustainable</p>
      <button class="start-screen__button button-turquoise button-turquoise--main">Get started</button>
    </div>
  )
}
