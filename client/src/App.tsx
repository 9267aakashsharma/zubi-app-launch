import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./modules";

const styleTheme = {
  "--primary": "#07D6D4",
  "--secondary": "#EAEFF7",
  "--text-primary": "#000000",
  "--text-secondary": "#fafafa",
  "--background-primary": "#000000",
  "--background-secondary": "#fafafa",
} as React.CSSProperties;

function App() {
  return (
    <div className="App" style={styleTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
