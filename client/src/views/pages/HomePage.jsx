import React from 'react'
import TripsList from '../components/TripsList'
import WeatherList from '../components/WeatherList'
import RewardStatusList from '../components/RewardStatusList'

export default function HomePage({ userId }) {
    return (
        <div className="home">

            <WeatherList userId={userId} />

            <TripsList userId={userId} shortList={true} />

            <RewardStatusList userId={userId} isRewardPage={false} />

        </div>
    )
}
