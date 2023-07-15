import { makeRequest } from './makeRequest'

export function getUserData({ userId }) {
    return makeRequest(`/users/${userId}`)
}
