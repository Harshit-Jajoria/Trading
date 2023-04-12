import { createSlice } from '@reduxjs/toolkit'
import { apicallbegin } from './api'

const initialState = {
    loader: false,
    data: null,
    timeStamp: null
}

const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState,
    reducers: {
        leaderboardCallStart(state) {
            state.loader = true
        },
        leaderboardCallSuccess(state, action) {
            state.loader = false
            state.data = action.payload
        },
        leaderboardCallFaliour(state) {
            state.loader = false
            state.data = null
        }
    },
})

const { leaderboardCallStart, leaderboardCallSuccess, leaderboardCallFaliour } = leaderboardSlice.actions

export const loadleaderboard = payload => dispatch => dispatch(apicallbegin({
    ...payload, onStart: leaderboardCallStart.type, 
    onSuccess: leaderboardCallSuccess.type, onError: leaderboardCallFaliour.type
}))

export const leaderboardReset = () => dispatch => dispatch({type: leaderboardCallFaliour.type, payload: 'leaderboardReset'})

export default leaderboardSlice.reducer