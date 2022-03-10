import { createStore } from "redux";
import rootReducer from "./reducers/index";
// it is our global store
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store