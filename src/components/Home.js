import React from 'react';
import './Home.css';
import {ReactComponent as PlusIcon} from '../assets/Plus_icon.svg';

export default function Home() {
  return (
    <div class="home">
      <div class="home__weather">
        <h3 class="home__weather__title">Weather for my next trip</h3>
        <div class="home__weather__items">
          {/* 5 day weather items */}
        </div>
      </div>

      <div class="home__my-trips">
        <div class="home__my-trips__header">
          <h3 class="home__my-trips__title">My trips</h3>
          <div class="home__my-trips__buttons">
            <button class="home__my-trips__button--see-all button-turquoise button-turquoise--small">See all</button>
            <button class="home__my-trips__button--add-trip button-grey"><PlusIcon /></button>
          </div>
        </div>
        <div class="home__my-trips__items">
          {/* trip items */}
        </div>
      </div>

      <div class="home__my-rewards">
        <div class="home__my-rewards__header">
          <h3 class="home__my-rewards__title">My rewards</h3>
          <button class="home__my-rewards__button--see-all button-turquoise button-turquoise--small">See all</button>
        </div>
        {/* reward level item */}
      </div>
    </div>
  )
}
