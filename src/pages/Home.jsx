import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from '../action/gamesAction';
// components 
import Game from '../components/Game';
// styling & animation
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Home() {
    // Fetch Games
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);

    // extract data from state
    const { popular, newGames, upcoming } = useSelector((state) => state.games);
        

  return (
    <GameList>
        <h2>Upcoming Games</h2>
        <Games>
            {upcoming.map((game) => {
                return (
                    <Game game={game} key={game.id} />
                )
            })}
        </Games>
    </GameList>
  )
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    
    h2 {
        padding: 5rem 0rem;
    }

`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;


export default Home