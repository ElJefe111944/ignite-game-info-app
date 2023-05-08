import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { loadGames } from '../action/gamesAction';

function Home() {
    // Fetch Games
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadGames());
    }, []);

  return (
    <div>Home</div>
  )
}

export default Home