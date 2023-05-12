import React from 'react';
// styling & animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../action/detailActions.js';
// routing
import { Link } from 'react-router-dom';


function Game( { game } ) {
  // prop destructure
  const { 
    name, 
    released,
    background_image,
    id
  } = game;

  // load details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={background_image} alt={name} />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    /* border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem; */
  }
`;



export default Game