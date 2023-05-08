import { combineReducers } from "redux";
import gamesReducer from './gamesReducer.js'


const rootReducer = combineReducers({
    games: gamesReducer,
});

export default rootReducer;