import React from 'react';
// styling & animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../action/detailActions.js';
// routing
import { Link } from 'react-router-dom';
import { smallImage } from '../util.js';


function Game( { game } ) {

    // prop destructure
    const { 
      name, 
      released,
      background_image,
      id
    } = game;

  const stringPathId = id.toString();

  // load details
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    // make backgrond non scrollable 
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame layout={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${stringPathId}`} src={smallImage(background_image, 640)} alt={name} />
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
  }
`;



export default Game