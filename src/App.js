import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SecondPage from "./Pages/SecondPage/SecondPage";
import TagPage from "./Pages/TagPage/TagPage";
import ScrollToTop from "./ScrollToTop";

import "./App.css";

function App() {
  const tagName = useSelector((state) => state.posts.tagName);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/id">
            <SecondPage />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path={`/${tagName}`}>
            <TagPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
