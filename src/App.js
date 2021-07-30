import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.js"
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Route path="/Home">
      <Header />
        <Home />
      </Route>
      <Route path="/About">
      <Header />
        <About />
      </Route>
      <Route path="/Contact">
      <Header />
        <Contact />
      </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      </BrowserRouter>

      </div>
  );
}

export default App;
