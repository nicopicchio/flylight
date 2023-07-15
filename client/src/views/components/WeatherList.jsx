import { Link } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
// import { getTrips } from '../../services/userTrips'
import WeatherItem from './WeatherItem'

export default function WeatherList({ userId, shortList }) {

    // TO DO: get weather from API based on next trip's location and dates

    // const { loading, error, value: trips } = useAsync(() => getTrips({ userId }), [userId])
    // if (loading) return <h1>Loading</h1>
    // if (error) return <h1 className="error-msg">{error}</h1>

    return (
        <div className="home__weather">
            <h2 className="home__weather__title">Weather for my next trip</h2>
            <div className="home__weather__items">
                <WeatherItem />
                <WeatherItem />
                <WeatherItem />
                <WeatherItem />
                <WeatherItem />
            </div>
        </div>
    )
}