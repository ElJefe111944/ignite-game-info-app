import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from '../action/gamesAction';
// components 
import Game from '../components/Game';
import GamesDetail from '../components/GamesDetail';
// styling & animation
import styled from 'styled-components';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
// routing
import { useLocation } from 'react-router';

function Home() {
    // get current location 
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];
  

    // Fetch Games
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);

    // extract data from state
    const { popular, newGames, upcoming, searched } = useSelector((state) => state.games);
        

  return (
      <GameList>
          <LayoutGroup type="crossfade">
              <AnimatePresence>
                  {pathId && <GamesDetail pathId={pathId} />}
              </AnimatePresence>
              {searched.length > 0 && (
                 <div className='searched'>
                 <h2>Searched Games</h2>
                 <Games>
                     {searched.map((game) => {
                         return (
                             <Game game={game} key={game.id} />
                         )
                     })}
                 </Games>
             </div>
              )}
              <h2>Upcoming Games</h2>
              <Games>
                  {upcoming.map((game) => {
                      return (
                          <Game game={game} key={game.id} />
                      )
                  })}
              </Games>
              <h2>Popular Games</h2>
              <Games>
                  {popular.map((game) => {
                      return (
                          <Game game={game} key={game.id} />
                      )
                  })}
              </Games>
              <h2>New Games</h2>
              <Games>
                  {newGames.map((game) => {
                      return (
                          <Game game={game} key={game.id} />
                      )
                  })}
              </Games>
          </LayoutGroup>
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