import React from 'react';
// styling & animation
import styled from 'styled-components';
import { motion } from 'framer-motion';


function Game( { game } ) {
  // prop destructure
  const { 
    name, 
    released,
    background_image,
  } = game;

  return (
    <StyledGame>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={background_image} alt={name} />
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
text-align: center;
border-radius: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;



export default Game