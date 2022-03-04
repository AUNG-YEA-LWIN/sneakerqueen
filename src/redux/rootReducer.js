import { combineReducers } from 'redux'
import ShoppingReducer from './Shopping/ShoppingReducer'

const rootReducer = combineReducers({
    shop: ShoppingReducer,
})

export default rootReducer