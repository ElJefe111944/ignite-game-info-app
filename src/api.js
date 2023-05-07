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


export const popularGamesURL = () => {
    return `${base_url}${popular_games}`;
};

