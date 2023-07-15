import { makeRequest } from './makeRequest'

export function getPurchasedRewards({ userId }) {
    return makeRequest(`/users/${userId}/rewards`)
}
