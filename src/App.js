import React from 'react'
import './App.css';
// import { Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
const App = () => {
  return (
    <>
    <Home/>
    <About/>
    <Contact/>


{/* 
      <Route exact path="/">
        <Home />

      </Route>
      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route> */}



    </>
  )
}

export default App
