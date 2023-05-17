import React from 'react';
// styling & animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// redux
import { useSelector } from 'react-redux';
// router 
import { useNavigate } from 'react-router';
import { smallImage } from '../util';
// images
import playstation from '../assets/playstation.svg';
import xbox from '../assets/xbox.svg';
import nintendo from '../assets/nintendo.svg';
import steam from '../assets/steam.svg';
import gamepad from '../assets/gamepad.svg';
import apple from '../assets/apple.svg';
import starEmpty from '../assets/star-empty.png';
import starFull from '../assets/star-full.png';


function GamesDetail({ pathId }) {

    let navigate = useNavigate();
    console.log(typeof pathId);

    // load game details
    const { screen, game, isLoading } = useSelector((state => state.details));

    // exit game detail 
    const exitDetailHandler = (e) => {
        const element = e.target;
        
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            navigate('/');
        };
    };

    // rating stars 
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                stars.push(<img alt='star' key={i} src={starFull} />);
            } else {
                stars.push(<img alt='star' key={i} src={starEmpty} />)
            }
            
        };
        return stars;
    };

    // get platform images 
    const getPlatform = (platform) => {
        switch(platform){
            case 'Playstation 4' || 'Playstation 5':
                return playstation;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            default:
                return gamepad;            
        }
    };

  return (
      <>
          {!isLoading && (
              <CardShadow className='card-shadow shadow' onClick={exitDetailHandler}>
                  <Detail layoutId={pathId} className="detail">
                      <Stats className="stats">
                          <Rating className="rating">
                              <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                              <p>Rating: {game.rating}</p>
                              {getStars(game.rating)}
                          </Rating>
                          <Info className="info">
                              <h3>Platforms</h3>
                              <Platforms className="platforms">
                                  {game.platforms?.map((data) => {
                                      return (
                                          <img key={data.platform.id} alt='platforms' src={getPlatform(data.platform.name)}></img>
                                      )
                                  })}
                              </Platforms>
                          </Info>
                      </Stats>
                      <Media className="media">
                          <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.name} />
                      </Media>
                      <Description className="description">
                          <p>{game.description_raw}</p>
                      </Description>
                      <Gallery className="gallery">
                          {screen.results?.map((screen) => {
                              return (
                                  <img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.id} />
                              )
                          })}
                      </Gallery>
                  </Detail>
              </CardShadow>
          )}
      </>
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
    z-index: 5;

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
    @media(max-width: 768px){
        padding: 1rem 0.5rem;

        img[alt="star"]{
            width: 1rem;
            height: 1rem;
        }
    }

    img {
        width: 100%;
    }
`;
const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;

    @media(max-width: 769px){
        flex-direction: column;
    }

    img {
        width: 2rem;
        height: 2rem;
        display: inline;

        @media(max-width: 769px){        
            height: 1.5rem;
            width: 1.75rem;
    }

    }
`;
const Info = styled(motion.div)`
    text-align: center;

    @media(max-width: 769px){
        h3 {
            padding: 0.5rem;
        }
    }
    
`;
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;

    img {
        margin-left: 3rem;
        @media(max-width: 768px){
        margin-left: 0.5rem;
    }
    }
`;
const Media = styled(motion.div)`
    margin-top: 5rem;

    @media(max-width: 768px){
        margin-top: 1rem;
    }

    img {
        width: 100%;
   
    }
`;

const Rating = styled(motion.div)`
    @media(max-width: 768px){
        h3 {
        padding: 0px;
        font-size: 11px;
        text-align: center;
        width: 100%;
    }
    p {
        margin-top: 5px;
    }
    }
`;
const Description = styled(motion.div)`
    margin: 5rem 0rem;

    @media(max-width: 768px){
        margin: .75rem 0rem;        
    }
`;

const Gallery = styled(motion.div)`
    @media(max-width: 768px) {
        img {
            margin-top: .55rem;
        }
    }
`;

export default GamesDetail