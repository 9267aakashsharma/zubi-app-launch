import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./modules";

export const styleTheme = {
  "--primary": "#07D6D4",
  "--secondary": "#EAEFF7",
  "--text-primary": "#ffffff",
  "--text-secondary": "#000000",
  "--background-primary": "#000000",
  "--background-secondary": "#ffffff",
  "--background-tertiary": "#1b212c",
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
