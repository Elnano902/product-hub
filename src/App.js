import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/js/bootstrap.js"
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Route path="/Home">
      <Header />
        <Home />
        <Footer />
      </Route>
      <Route path="/About">
      <Header />
        <About />
        <Footer />
      </Route>
      <Route path="/Contact">
      <Header />
        <Contact />
        <Footer />
      </Route>
      <Route path="/Login">
        <Login />
        <Footer />
      </Route>
      <Route path="/Register">
        <Register />
        <Footer />
      </Route>
      <Redirect from="/"to="/Home"/>
      </BrowserRouter>

      </div>
  );
}

export default App;
