import { createSlice } from '@reduxjs/toolkit'
import { apicallbegin } from './api'

const initialState = {
    loader: false,
    data: null,
    timeStamp: null
}

const tradeSlice = createSlice({
    name: 'trade',
    initialState,
    reducers: {
        tradeCallStart(state) {
            state.loader = true
        },
        tradeCallSuccess(state, action) {
            state.loader = false
            state.data = action.payload
        },
        tradeCallFaliour(state) {
            state.loader = false
            state.data = null
        }
    },
})

const { tradeCallStart, tradeCallSuccess, tradeCallFaliour } = tradeSlice.actions

export const loadTradeRecords = payload => dispatch => dispatch(apicallbegin({
    ...payload, onStart: tradeCallStart.type, 
    onSuccess: tradeCallSuccess.type, onError: tradeCallFaliour.type
}))

export const tradeReset = () => dispatch => dispatch({type: tradeCallFaliour.type, payload: 'tradeReset'})

export default tradeSlice.reducer