import React, { useState } from 'react';
// animations & styling 
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animation';
// assets 
import logo from '../assets/logo.svg';
// Redux  Routes
import { fetchSearch } from '../action/gamesAction';
import { useDispatch } from 'react-redux';

function Navbar() {

    // search functionality
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');

    // on change
    const inputHandler = (e) => {
        let searchInput = e.target.value;
        setTextInput(searchInput);
    };
    // on submit 
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    };
    // clear search 
    const clearSearch = () => {
        dispatch({
            type: 'CLEAR_SEARCH',
        })
    };

  return (
      <StyledNav variants={fadeIn} initial='hidden' animate='show'>
          <Logo onClick={clearSearch}>
              <img src={logo} alt="logo" />
              <h1>Ignite</h1>
          </Logo>
          <form className="search">
            <input value={textInput} onChange={inputHandler} type="text" />
            <button onClick={submitSearch} type='submit'>Search</button>
          </form>
      </StyledNav>
  )
};

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    @media(max-width: 768px){
        padding: .5rem 0.55rem;
        text-align: center;
    }

    input {
        width: 37%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        @media(max-width: 768px){
            width: 65%;
            font-size: .95rem;
            padding: 0.5rem;  
    }
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white;
        @media(max-width: 768px){
            font-size: .95rem;
            padding: 0.5rem 1rem;        
    }
    }
`;
const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        height: 2rem;
        width: auto;
        padding-right: 0.45rem;
    }
`;

export default Navbar