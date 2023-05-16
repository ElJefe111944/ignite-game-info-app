import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  

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
        &::-webkit-scrollbar-track {
         background: white;
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
        padding: 1.5rem 0rem;
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
    img {
        display: block;
    }
    input {
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
    }

    @media(max-width: 768px){
        h2 {
        font-size: 1.75rem;
        }
        h3 {
        font-size: .90rem;
        padding: 1.10rem 0.5rem;
        }
        p {
        font-size: .70rem;
        line-height: 150%;
        }
    }
    `

export default GlobalStyles;