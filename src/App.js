import { BrowserRouter, Route } from "react-router-dom";
import NavBarAv from "./componests/NavBarAv";
import Connexion from "./componests/Connexion";
import Acceuil from "./componests/Acceuil";
import Inscription from "./componests/Inscription";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarAv />
        <Route exact path="/" component={Acceuil} />
        <Route path="/Connexion" component={Connexion} />
        <Route path="/Inscription" component={Inscription} />
      </BrowserRouter>
    </div>
  );
}

export default App;
