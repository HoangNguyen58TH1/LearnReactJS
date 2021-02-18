import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopMenu from './component3/TopMenu'
import Products from './pages/Products'

export default function App3() {
  return (
    <Router>
      <div>
        <nav>
          <TopMenu />
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() { return <h2>Home</h2>; }