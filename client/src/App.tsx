import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./modules";

export const darkTheme = {
  "--primary": "#0062E3",
  "--secondary": "#EAEFF7",
  "--text-primary": "#ffffff",
  "--text-secondary": "#000000",
  "--background-primary": "#000000",
  "--background-secondary": "#ffffff",
  "--background-tertiary": "#1b212c",
} as React.CSSProperties;

export const lightTheme = {
  "--primary": "#0062E3",
  "--secondary": "#EAEFF7",
  "--text-primary": "#000000",
  "--text-secondary": "#ffffff",
  "--background-primary": "#ffffff",
  "--background-secondary": "#000000",
  "--background-tertiary": "#f1f1f1",
} as React.CSSProperties;

function App() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App" style={theme === "dark" ? darkTheme : lightTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home theme={theme} toggleTheme={toggleTheme} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
