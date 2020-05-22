import React from "react";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
// import VivaAnuncios from './components/Maps-vivaAnuncios/vivaAnuncios';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/maps" exact>
            <Maps />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
