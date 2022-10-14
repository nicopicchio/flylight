import React from 'react';
import './StartScreen.css';
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

export default function StartScreen() {
  return (
    <div className="start-screen">
      <img className="start-screen__logo" src={logo} alt="FlyLight logo"/>
      <h1 className="start-screen__title">FlyLight</h1>
      <p className="start-screen__description">An app that rewards flyers who pack lighter as their way to help reduce carbon emissions and fly more sustainable</p>
      <Link to="/my-trips-summary" class="start-screen__button button-turquoise button-turquoise--main">Get started</Link>
    </div>
  )
}
