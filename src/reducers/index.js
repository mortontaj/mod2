import strategyReducer from './strategyReducer'
import randomReducer from './randomReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    str: strategyReducer, 
    ran: randomReducer
})

export default rootReducer