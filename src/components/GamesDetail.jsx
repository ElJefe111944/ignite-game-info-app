import React from 'react';
// styling & animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// redux
import { useSelector } from 'react-redux';
// router 
import { useNavigate } from 'react-router';
import { smallImage } from '../util';

function GamesDetail() {

    let navigate = useNavigate();

    // load game details
    const { screen, game, isloading } = useSelector((state => state.details));

    // exit game detail 
    const exitDetailHandler = (e) => {
        const element = e.target;
        
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            navigate('/');
        };
    };

  return (
      <div>
          {!isloading && (
              <CardShadow className='card-shadow shadow' onClick={exitDetailHandler}>
                  <Detail className="detail">
                      <Stats className="stats">
                          <div className="rating">
                              <h3>{game.name}</h3>
                              <p>Rating: {game.rating}</p>
                          </div>
                          <Info className="info">
                              <h3>Platforms</h3>
                              <Platforms className="platforms">
                                  {game.platforms?.map((data) => {
                                      return (
                                          <h3 key={data.platform.id}>{data.platform.name}</h3>
                                      )
                                  })}
                              </Platforms>
                          </Info>
                      </Stats>
                      <Media className="media">
                          <img src={smallImage(game.background_image, 1280)} alt={game.name} />
                      </Media>
                      <Description className="description">
                          <p>{game.description_raw}</p>
                      </Description>
                      <div className="gallery">
                          {screen.results?.map((screen) => {
                              return (
                                  <img src={smallImage(screen.image, 1280)} key={screen.id} alt='Image' />
                              )
                          })}
                      </div>
                  </Detail>
              </CardShadow>
          )}
      </div>
  );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;

    &::-webkit-scrollbar {
        width: 0%.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
         background: white;
    }
`;
const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;

    img {
        width: 100%;
    }
`;
const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Info = styled(motion.div)`
    text-align: center;
`;
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;

    img {
        margin-left: 3rem;
    }
`;
const Media = styled(motion.div)`
    margin-top: 5rem;

    img {
        width: 100%;
   
    }
`;
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GamesDetail