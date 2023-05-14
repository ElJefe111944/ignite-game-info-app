// components & pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// styles
import GlobalStyles from "./components/GlobalStyles";
// Routing 
import { Routes, Route } from "react-router";


function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
