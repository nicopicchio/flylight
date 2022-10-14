import React from 'react';
import './Home.css';
import Weather from '../../components/Weather/Weather';
import {ReactComponent as PlusIcon} from '../../assets/Plus_icon.svg';

export default function Home() {
  return (
    <div className="home">
      <div className="home__weather">
        <h3 className="home__weather__title">Weather for my next trip</h3>
        <div className="home__weather__items">
          {/* 5 day weather items */}
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
        </div>
      </div>

      <div className="home__my-trips">
        <div className="home__my-trips__header">
          <h3 className="home__my-trips__title">My trips</h3>
          <div className="home__my-trips__buttons">
            <button className="home__my-trips__button--see-all button-turquoise button-turquoise--small">See all</button>
            <button className="home__my-trips__button--add-trip button-grey"><PlusIcon /></button>
          </div>
        </div>
        <div className="home__my-trips__items">
          {/* trip items */}
        </div>
      </div>

      <div className="home__my-rewards">
        <div className="home__my-rewards__header">
          <h3 className="home__my-rewards__title">My rewards</h3>
          <button className="home__my-rewards__button--see-all button-turquoise button-turquoise--small">See all</button>
        </div>
        {/* reward level item */}
      </div>
    </div>
  )
}
