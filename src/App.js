import React from 'react';
import './App.css';
import Header from './Header';
import Chat from './chat';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Header backButton="/" />
            <Chat />
            {/* <h1>gygy</h1> */}
          </Route>
          <Route path="/">
            <Header/>
            <TinderCards />
            <SwipeButtons />

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