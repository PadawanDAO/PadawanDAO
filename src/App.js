import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Home, Players, Proposals } from "./pages";
function App() {
  return (
    <div class="bg_image">
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/proposals" exact component={() => <Proposals />} />
          <Route path="/players" exact component={() => <Players />} />
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
