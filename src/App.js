import React from 'react'
import './App.css';
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      {/* <Home/>
    <About/>
    <Contact/> */}
      <Header />
      
      <Routes>

        <Route exact path="/" element={<Home />}>

        </Route>
        <Route exact path="/about" element={<About />}>

        </Route>

        <Route exact path="/contact" element={<Contact />}>

        </Route>

      </Routes>
      <Footer />



    </>
  )
}

export default App
