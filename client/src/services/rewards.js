import { makeRequest } from './makeRequest'

export function getRewards() {
    return makeRequest(`/rewards`)
}
