import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@400;500;600&display=swap'); */


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0%.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
    }
    body {
        width: 100%;
        font-family: 'Montserrat', sans-serif;
    }
    h2 {
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #707070;
    }
    h3 {
        font-size: 1.3rem;
        color: #696969;
        padding: 1.5rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a {
        text-decoration: none;
        color: #696969;
    }
    `

export default GlobalStyles;