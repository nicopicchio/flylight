import { makeRequest } from './makeRequest'

export function getTrips({ userId }) {
    return makeRequest(`/users/${userId}/trips`)
}

export function getTrip({ userId, tripId }) {
    return makeRequest(`/users/${userId}/trips/${tripId}`)
}

export function createTrip({ userId, depAirport, destAirport, date, flightClass, flightNumber, hasHoldLuggage, holdLuggageWeightAllowance, holdLuggageGoal, carbonFootprint }) {
    return makeRequest(`/users/${userId}/trips`, {
        method: "POST",
        data: { 
            "trip": {
                "departure_airport_code": depAirport,
                "destination_airport_code": destAirport,
                "date": date,
                "class": flightClass,
                "flight_number": flightNumber,
                "hold_luggage": hasHoldLuggage ? 1 : 0,
                "hold_luggage_weight_allowance": holdLuggageWeightAllowance,
                "hold_luggage_goal": holdLuggageGoal,
                "carbon_footprint": carbonFootprint || 0,
            }
        }
    })
}

export function updateTrip({ userId, tripId, depAirport, destAirport, date, flightClass, flightNumber, hasHoldLuggage, holdLuggageWeightAllowance, holdLuggageGoal, carbonFootprint }) {    
    return makeRequest(`users/${userId}/trips/${tripId}`, {
        method: "PUT",
        data: { 
            "trip": {
                "departure_airport_code": depAirport,
                "destination_airport_code": destAirport,
                "date": date,
                "class": flightClass,
                "flight_number": flightNumber,
                "hold_luggage": hasHoldLuggage ? 1 : 0,
                "hold_luggage_weight_allowance": holdLuggageWeightAllowance,
                "hold_luggage_goal": holdLuggageGoal,
                "carbon_footprint": carbonFootprint || 0,
            }
         }
    })
}

export function deleteTrip({ userId, tripId }) {
  return makeRequest(`users/${userId}/trips/${tripId}`, {
    method: "DELETE",
  })
}