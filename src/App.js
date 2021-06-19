import { BrowserRouter, Route } from "react-router-dom";
import NavBarAv from "./componests/NavBarAv";
import Connexion from "./componests/Connexion";
import Acceuil from "./componests/Acceuil";
import Inscription from "./componests/Inscription";
import NavBarAp from "./componests/NavBarAp";
import React, {useState} from 'react';


function App() {
  
  
  return (
    <div>
       
      <BrowserRouter>
        <NavBarAv />
        <Route exact path="/" component={Acceuil} />
        <Route path="/Connexion" component={Connexion} />
        <Route path="/Inscription" component={Inscription} />
        <Route path="/NavBarAp" component={NavBarAp} />
      </BrowserRouter>
      
      
      
    </div>
    
  );
 
}

export default App;
