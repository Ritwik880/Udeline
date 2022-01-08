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
import abhishek from '../image/abhishek.jpeg'
import perminder from '../image/perminder.jpeg'
import rajan from '../image/rajan.jpeg'
import Aman from '../image/Aman.jpeg'
const About = () => {

    const Team = (props) => {
        return (
            <>
                <img src={props.img} />
                <h2>{props.title}</h2>
                <p>{props.para}</p>
            </>
        )
    }

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
                        <Team img={joyshri} title="Joysri Talukdar" para="CEO & Founder" />

                    </div>
                    <div class="member">
                        <Team img={saurab} title="Saurab Patel" />

                    </div>
                    <div class="member">
                        <Team img={nishant} title="Nishant Kumar" />

                    </div>
                    <div class="member">
                        <Team img={anmol} title="Anmol Raj" />

                    </div>
                    <div class="member">
                        <Team img={ayush} title="Ayush Sharma" />

                    </div>
                    <div class="member">
                        <Team img={ritwik} title="Ritwik Sinha" para="Cto" />

                    </div>
                    <div class="member">
                        <Team img={akash} title="Akash" />

                    </div>
                    <div class="member">
                        <Team img={perminder} title="Perminder Singh" />

                    </div>
                    <div class="member">
                        <Team img={abhishek} title="Abhishek Raj" />

                    </div>
                    <div class="member">
                        <Team img={rajan} title="Rajan Kumar" />

                    </div>
                    <div class="member">
                        <Team img={Aman} title="Aman Jha" />

                    </div>
                </div>
                <div class="button">
                    <label for="one" class=" active one"></label>
                    <label for="two" class="two"></label>
                </div>
            </section>

            {/* <Team img={saurab} title="Saurav Patel" /> */}




        </>
    )
}

export default About
