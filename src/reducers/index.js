import todoReducers from "./todoReducers";
import { combineReducers} from 'redux'
// combineReducers always take a object 
const rootReducer = combineReducers({
    todoReducers
})
export default rootReducer