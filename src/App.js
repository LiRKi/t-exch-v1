import NavBarAv from "./componests/NavBarAv";
import Home from './componests/Home';
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Home/>
        <NavBarAv />
      </BrowserRouter>
    </div>
  );
}

export default App;
