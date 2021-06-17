import NavBarAv from "./componests/NavBarAv";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarAv />
      </BrowserRouter>
    </div>
  );
}

export default App;
