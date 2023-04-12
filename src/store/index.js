import { configureStore } from '@reduxjs/toolkit'
import combineReducers from './combineReducer'
import api from './middleware/api'

export default configureStore({
    reducer : combineReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
    devTools: process.env.NODE_ENV !== 'production',
})
