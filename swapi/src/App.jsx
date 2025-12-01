import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";
import StarshipDetails from "./components/StarshipDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<CharacterList />} />
        <Route path = '/characters/:id' element = {<CharacterDetails />} />
        <Route path = '/starships/:id' element = {<StarshipDetails />} />
      </Routes>
    </Router>
  );
}

export default App;