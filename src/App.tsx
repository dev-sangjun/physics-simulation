import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { SimulationContainer } from "./containers";
import CalculatorContainer from "./containers/CalculatorContainer";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/calculator">
            <CalculatorContainer />
          </Route>
          <Route exact path="/">
            <SimulationContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
