import React from 'react'
import '../App.css'
import '../team.css'
import saurab from '../image/saurab.jpg'
import nishant from '../image/nishant.jpeg'
import anmol from '../image/anmol.jpg'
import ritwik from '../image/ritwik.jpg'
import ayush from '../image/ayush.jpeg'
import joyshri from '../image/joyshri.jpeg'
import akash from '../image/akash.jpeg'

const About = () => {
    


    return (
        <>
            <div className="header pb-6 d-flex align-items-center about">

                <span className="mask bg-gradient-default opacity-7"></span>
                <div className="container d-flex align-items-center">
                    <div className="text-white mx-auto mt-5 upper">
                        <div className="display-2 text-center">
                            About Us
                        </div>
                        <p>Udeline is an online study platform that assists students of class XII for their boards, guide them and mentor them. You will encounter friendly environment of learning and a guidance unique from every other study platform. Our endeavour is to make students believe in themselves, make them responsible and help them achieve their dream college. We encourage a zest for learning and make sure that they get what they want.</p>

                    </div>
                </div>
            </div>
            <section className='teamSection'>
                <h1 class="title">our Mentor</h1>
                <input type="radio" name="dot" id="one" />
                <input type="radio" name="dot" id="two" />
                <div class="team-row">
                    <div class="member">
                        <img src={joyshri} alt="joyshri image" />
                        <h2>Joysri Talukdar</h2>
                        <p>CEO & Founder</p>
                    </div>
                    <div class="member">
                        <img src={saurab} alt="joyshri image" />
                        <h2>Saurab Patel</h2>
                        <p>Cio</p>
                    </div>
                    <div class="member">
                        <img src={nishant} alt="joyshri image" />
                        <h2>Nishant Kumar</h2>
                        <p>Founder Educator</p>
                    </div>
                    <div class="member">
                        <img src={anmol} alt="joyshri image" />
                        <h2>Anmol Raj</h2>
                        <p>Company Adviser</p>
                    </div>
                    <div class="member">
                        <img src={ayush} alt="joyshri image" />
                        <h2>Ayush Sharma</h2>
                        <p>CMO</p>
                    </div>
                    <div class="member">
                        <img src={ritwik} alt="joyshri image" />
                        <h2>Ritwik Sinha</h2>
                        <p>Cto</p>
                    </div>
                    <div class="member">
                        <img src={akash} alt="joyshri image" />
                        <h2>Akash</h2>
                        <p>Content Manager</p>
                    </div>

                </div>
                <div class="button">
                    <label for="one" class=" active one"></label>
                    <label for="two" class="two"></label>
                </div>
            </section>



        </>
    )
}

export default About
