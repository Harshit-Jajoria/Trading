import axios from "axios"
import { apicallbegin } from "../reducers/api"

const baseURL = `https://ko-trading-game-backed-api-gkmkh.ondigitalocean.app/api`
// const baseURL = `http://localhost:5000/api/`


const api = ({dispatch}) => (next) => async (action) => {
  if (action.type !== apicallbegin.type) return next(action)
    const {url, method, data, onStart, onSuccess, onError} = action.payload
    if (onStart) dispatch({type: onStart})
    try {
        const result = await axios({baseURL, url, method, data})
        dispatch({type: onSuccess, payload: result.data})
    } catch (error) {
        dispatch({type: onError, payload: error.message})
    }
}

export const apiCall = async (req) =>{
    const {url, method, data} = req
    try
    {
        const result = await axios({baseURL, url, method, data})
        // console.log('Result',result.data)
        return result.data
    }
    // const result = await axios({baseURL, url, method, data})
    catch (error) {
        console.error(error)
        return error
    }

}

export default api