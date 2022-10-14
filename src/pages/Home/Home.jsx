import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Header from '../../components/Header/Header';
import Weather from '../../components/Weather/Weather';
import Trip from '../../components/Trip/Trip';
import RewardLevel from '../../components/RewardLevel/RewardLevel';
import {ReactComponent as PlusIcon} from '../../assets/Plus_icon.svg';

export default function Home() {
  return (
    <div className="home">
      <Header />

      <div className="home__weather">
        <h2 className="home__weather__title">Weather for my next trip</h2>
        <div className="home__weather__items">
          {/* 5 day weather items, change to dynamic */}
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
        </div>
      </div>

      <div className="home__my-trips">
        <div className="home__my-trips__header">
          <h2 className="home__my-trips__title">My trips</h2>
          <div className="home__my-trips__buttons">
            <Link to="/my-trips-summary" className="home__my-trips__button--see-all button-turquoise button-turquoise--small">See all</Link>
            <Link to="/add-trip" className="home__my-trips__button--add-trip button-grey"><PlusIcon /></Link>
          </div>
        </div>
        <div className="home__my-trips__items">
          {/* trip items, change to dynamic */}
          <Trip />
          <Trip />
        </div>
      </div>

      <div className="home__my-rewards">
        <div className="home__my-rewards__header">
          <h2 className="home__my-rewards__title">My rewards</h2>
          <Link to="/my-rewards" className="home__my-rewards__button--see-all button-turquoise button-turquoise--small">See all</Link>
        </div>
        <div className="home__my-rewards__items">
          {/* reward level item, change to dynamic */}
          <RewardLevel />
        </div>
      </div>
    </div>
  )
}
