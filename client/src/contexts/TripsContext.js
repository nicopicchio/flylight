import React, { useContext } from 'react'
import { useAsync } from '../hooks/useAsync'
// import { useUser } from '../hooks/useUser'
import { getTrips } from '../services/userTrips'

const Context = React.createContext()

export function useTrips() {
    return useContext(Context)
}

export function TripsProvider({ userId, children }) {

    // const userId = useUser().id
    const { loading, error, value: trips } = useAsync(() => getTrips({ userId }), [userId])

    return (
        <Context.Provider value={{
            trips,
        }}>
            {loading ? (
                <h1>Loading</h1>
            ) : error ? (
                <h1 className="error-msg">{error}</h1>
            ) : (
                children
            )}
        </Context.Provider>
    )
}