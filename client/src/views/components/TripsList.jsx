import { Link } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { getTrips } from '../../services/userTrips'
import TripPreview from './TripPreview'
import { ReactComponent as PlusIcon } from '../../assets/Plus_icon.svg'
import { ReactComponent as Arrow } from '../../assets/Arrow.svg'

export default function TripsList({ userId, shortList }) {

    const { loading, error, value: trips } = useAsync(() => getTrips({ userId }), [userId])

    if (loading) return <h1>Loading</h1>

    if (error) return <h1 className="error-msg">{error}</h1>

    const numOfListItems = shortList ? 2 : trips?.length

    return (
        <div className="my-trips">

            <div className="home__my-trips__header">
                <h2 className="home__my-trips__title">My trips</h2>
                <div className="home__my-trips__buttons">
                    {trips?.length > 0 &&
                        <Link to="/trips" className="home__my-trips__button--see-all button-turquoise button-turquoise--small">See all</Link>
                    }
                    <Link to="/add-trip" className="home__my-trips__button--add-trip button-grey"><PlusIcon /></Link>
                </div>
            </div>

            <div className="home__my-trips__items">
                {trips?.length > 0 ? (
                    <div className='trip-list'>
                        {trips.slice(0, numOfListItems).map(trip => 
                            <div key={trip.id}>
                                <TripPreview trip={trip} />
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="my-trips__items__empty">
                        <p>You don't have any trips yet, <br/>
                        click here to add a new trip!</p>
                        <div className="my-trips__items__empty__arrow-container">
                        <Arrow />
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}