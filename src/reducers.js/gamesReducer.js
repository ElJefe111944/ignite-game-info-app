
const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
};

const gameRducer = (state=initState, action) => {
    switch(action.type){
        case 'FETCH_GAMES':
            return {...state};
        default:
            return {...state};
    }
};

export default gameRducer;