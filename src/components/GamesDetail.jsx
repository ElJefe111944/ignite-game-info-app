import React from 'react';
// styling & animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// redux
import { useSelector } from 'react-redux';

function GamesDetail() {
    // load game details
    const { screen, game } = useSelector((state => state.details));

  return (
    <div className='card-shadow'>
        <div className="detail">
            <div className="stats">
                <div className="rating">
                    <h3>{game.name}</h3>
                    <p>Rating: {game.rating}</p>
                </div>
                <div className="info">
                    <h3>Platforms</h3>
                    <div className="platforms">
                        {game.platforms.map((data) => {
                            return (
                                <h3 key={data.id}>{data.name}</h3>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="media">
                <img src={game.background_image} alt={game.name} />
            </div>
            <div className="gallery">
                {screen.results.map((screen) => {
                    return (
                        <img src={screen.image} key={screen.id} alt='Image' />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default GamesDetail