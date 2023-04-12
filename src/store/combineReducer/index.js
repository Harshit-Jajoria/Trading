import { combineReducers } from 'redux'
import userReducer from '../reducers/user'
import countryReducer from "../reducers/countries"
import playReducer from "../reducers/play";
import tradeReducer from "../reducers/trade";
import leaderboardReducer from "../reducers/leaderboard"
export default combineReducers({
    userReducer,
    countryReducer,
    playReducer,
    tradeReducer,
    leaderboardReducer
})