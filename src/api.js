// Base URL
const base_url = `https://api.rawg.io/api/`;
// API key
const api_key = process.env.REACT_APP_API_KEY;

// Get date
// month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    // date format 
    if(month < 10){
        return `0${month}`;
    } else {
        return month;
    }
};
// day 
const getCurrentDay = () => {
    const day = new Date().getDate();
    // date format 
    if(day < 10){
        return `0${day}`;
    } else {
        return day;
    }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
// current year
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// last year 
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
// next year 
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
// Upcoming games
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
// New games
const new_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => {
    return `${base_url}${popular_games}`;
};

export const upcomingGamesURL = () => {
    return `${base_url}${upcoming_games}`;
};

export const newGamesURL = () => {
    return `${base_url}${new_games}`;
};
// game details
export const gameDetailsURL = (game_id) => {
    return `${base_url}games/${game_id}?key=${api_key}`;
};
// game screenshots
export const gameScreenshotsURL = (game_id) => {
    return `${base_url}games/${game_id}/screenshots?key=${api_key}`;
};