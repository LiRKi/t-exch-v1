import { BrowserRouter, Route } from "react-router-dom";
import NavBarAv from "./componests/NavBarAv";
import Connexion from "./componests/Connexion";
import Acceuil from "./componests/Acceuil";
import Inscription from "./componests/Inscription";
import NavBarAp from "./componests/NavBarAp";
import Publication from "./componests/Publication";
import React, {useState} from 'react';


function App() {
  
  
  return (
    <div>
       
      <BrowserRouter>
        <Route exact path="/" component={Acceuil} />
        <Route path="/Connexion" component={Connexion} />
        <Route path="/Inscription" component={Inscription} />
        <Route path="/NavBarAp" component={NavBarAp} />
        <Route path="/publication" component={Publication} />
        
      </BrowserRouter>
      
      
      
    </div>
    
  );
 
}

export default App;
