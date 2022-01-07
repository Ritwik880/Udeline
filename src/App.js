import React, { useState, useEffect } from "react";
import './App.css';
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Course from './components/Course';
import RoadMap from './components/RoadMap'
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const heading = {
    textAlign: 'center'
  }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000) //3 secs
  }, [])
  return (
    <>
      {
        loading ?
          <div className="preloder">
            <div className="preloder-content">
              <h1 style={heading}>Udeline</h1>
              <h3>The one behind every great one</h3>
            </div>
          </div>
          :
          <div>
            <Header />
            <ScrollToTop />
            <Routes>

              <Route exact path="/" element={<Home />}>

              </Route>

              <Route exact path="/about" element={<About />}>

              </Route>
              <Route exact path="/course" element={<Course />}>

              </Route>
              <Route exact path="/roadmap" element={<RoadMap />}>

              </Route>

              <Route exact path="/contact" element={<Contact />}>

              </Route>

            </Routes>
            <Footer />



          </div>




      }
    </>
  )
}

export default App


