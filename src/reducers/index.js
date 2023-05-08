import { combineReducers } from "redux";
import gamesReducer from './gamesReducer.js'
import detailReducer from "./detailReducer.js";




const rootReducer = combineReducers({
    games: gamesReducer,
    details: detailReducer,
});

export default rootReducer;