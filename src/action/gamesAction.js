import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchedGameURL } from '../api.js';

// Action Creator

export const loadGames = () => async (dispatch) => {
    // fetch axios
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newData = await axios.get(newGamesURL());

    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newData.data.results,
        },
    })
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchedData = await axios.get(searchedGameURL(game_name));

    dispatch({
        type: 'FETCHED_SEARCHED',
        payload: {
            searched: searchedData.data.results,
        }
    })
};