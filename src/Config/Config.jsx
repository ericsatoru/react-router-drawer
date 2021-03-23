import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import { Container } from './styles';

function Config() {
  return <Router>

      <Link to="/Config/Sub">
          Clicar
      </Link>
      <Switch>
          <Route path="/Config/Sub">
            <Sub></Sub>
          </Route>
        </Switch>
  </Router>;
}

function Sub() {
    console.log('clicou em sub')

    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
export default Config;