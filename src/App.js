import React from 'react';
import './App.css';
import Header from './Header';
import Chat from './chat';
import TinderCards from './TinderCards';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>

        <Switch>
          <Route path="/">
            <TinderCards />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{/* Header */ }
{/* Tinder Cards */ }
{/* Buttons below tinder cards */ }

{/* CHAT LIST SCREEN */ }
{/* Individual CHAT SCREEN */ }