import { createSlice } from '@reduxjs/toolkit'
import { apicallbegin } from './api'

const initialState = {
    loader: false,
    data: [],
    timeStamp: null
}

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        countryCallStart(state) {
            state.loader = true
        },
        countryCallSuccess(state, action) {
            state.loader = false
            state.data = action.payload.response
        },
        countryCallFaliour(state) {
            state.loader = false
            state.data = null
        }
    },
})

const { countryCallStart, countryCallSuccess, countryCallFaliour } = countrySlice.actions

export const loadcountries = payload => dispatch => dispatch(apicallbegin({
    ...payload, onStart: countryCallStart.type, 
    onSuccess: countryCallSuccess.type, onError: countryCallFaliour.type
}))

export default countrySlice.reducer