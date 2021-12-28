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
    const image = {
        width: '100px',
        borderRadius: '50%'

    }
    const container = {
        // height: '100px'

    }
    const text = {
        // marginTop: '10%'


    }



    return (
        <>
            <div className="header pb-6 d-flex align-items-center about">

                <span className="mask opacity-7" id='bg-gradient-default'></span>
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
                        <img src={joyshri} alt="" />
                        <h2>Joysri Talukdar</h2>
                        <p>CEO & Founder</p>
                    </div>
                    <div class="member">
                        <img src={saurab} alt="" />
                        <h2>Saurab Patel</h2>
                        <p>Cio</p>
                    </div>
                    <div class="member">
                        <img src={nishant} alt="" />
                        <h2>Nishant Kumar</h2>
                        <p>Founder Educator</p>
                    </div>
                    <div class="member">
                        <img src={anmol} alt="" />
                        <h2>Anmol Raj</h2>
                        <p>Company Adviser</p>
                    </div>
                    <div class="member">
                        <img src={ayush} alt="" />
                        <h2>Ayush Sharma</h2>
                        <p>CMO</p>
                    </div>
                    <div class="member">
                        <img src={ritwik} alt="" />
                        <h2>Ritwik Sinha</h2>
                        <p>Cto</p>
                    </div>
                    <div class="member">
                        <img src={akash} alt="" />
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
