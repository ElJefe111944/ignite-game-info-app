import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./action/gamesAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  return (
    <div className="App">
      <h1>Hello ingite</h1>
    </div>
  );
}

export default App;
