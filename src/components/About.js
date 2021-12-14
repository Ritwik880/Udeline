import React from 'react'
import '../App.css'
import saurab from '../image/saurab.jpg';
import anmol from '../image/anmol.jpg';
import nishant from '../image/nishant.jpeg';
const About = () => {
    const image = {
        width: '100px',
        borderRadius: '50%'

    }
    const text = {
        
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
            <div class="row justify-content-center">
                <div class="col-lg-12 card-wrapper ct-example">

                    <div class="card">
                        <div class="card-header text-center">
                            <h2 class="display-3">Our Team</h2>
                        </div>



                        <div class="col-lg-12 justify-content-between about-us">
                            <div class="row mt-5 justify-content-center">
                            <div class="col-lg-4">
                                    <div class="card-body text-center pb-3">
                                        <div class="container">
                                            <div class="card card-profile shadow">
                                                <div class="px-3">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-3 order-lg-2">
                                                            <div class="card-profile-image">
                                                                <a href="https://www.linkedin.com/in/samkitsharma/">
                                                                    {/* <img src={nishant} style={image}  /> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="text-center mt-5 pb-3">
                                                        <h3>Joyshree</h3>
                                                        <div class="h5 font-weight-400">Founder</div>
                                                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum reiciendis, ullam vero quo doloremque vitae quibusdam officia eligendi minima, magni incidunt veniam rem ratione quam, eum architecto doloribus dolorem quas.
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card-body text-center pb-3">
                                        <div class="container">
                                            <div class="card card-profile shadow">
                                                <div class="px-3">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-3 order-lg-2">
                                                            <div class="card-profile-image">
                                                                <a href="https://www.linkedin.com/in/saurabh-patel-ba7686179/">
                                                                    {/* <img src={saurab} style={image} /> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="text-center mt-5 pb-3" style={text}>
                                                        <h3>Saurabh patel</h3>
                                                        <div class="h5 font-weight-400">Co-Founder</div>
                                                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum reiciendis, ullam vero quo doloremque vitae quibusdam officia eligendi minima, magni incidunt veniam rem ratione quam, eum architecto doloribus dolorem quas.
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card-body text-center pb-3">
                                        <div class="container">
                                            <div class="card card-profile shadow">
                                                <div class="px-3">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-3 order-lg-2">
                                                            <div class="card-profile-image">
                                                                <a href="https://www.linkedin.com/in/samkitsharma/">
                                                                    {/* <img src={anmol} style={image}  /> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="text-center mt-5 pb-3">
                                                        <h3>Anmol Raj</h3>
                                                        <div class="h5 font-weight-400">Co-Founder</div>
                                                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum reiciendis, ullam vero quo doloremque vitae quibusdam officia eligendi minima, magni incidunt veniam rem ratione quam, eum architecto doloribus dolorem quas.
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card-body text-center pb-3">
                                        <div class="container">
                                            <div class="card card-profile shadow">
                                                <div class="px-3">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-3 order-lg-2">
                                                            <div class="card-profile-image">
                                                                <a href="https://www.linkedin.com/in/samkitsharma/">
                                                                    {/* <img src={nishant} style={image}  /> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="text-center mt-5 pb-3">
                                                        <h3>Nishant Kumar</h3>
                                                        <div class="h5 font-weight-400">Co-Founder</div>
                                                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum reiciendis, ullam vero quo doloremque vitae quibusdam officia eligendi minima, magni incidunt veniam rem ratione quam, eum architecto doloribus dolorem quas.
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="card-body text-center pb-3">
                                        <div class="container">
                                            <div class="card card-profile shadow">
                                                <div class="px-3">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-3 order-lg-2">
                                                            <div class="card-profile-image">
                                                                <a href="https://www.linkedin.com/in/samkitsharma/">
                                                                    {/* <img src={nishant} style={image}  /> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="text-center mt-5 pb-3">
                                                        <h3>Abhineet Anand</h3>
                                                        <div class="h5 font-weight-400">Co-Founder</div>
                                                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum reiciendis, ullam vero quo doloremque vitae quibusdam officia eligendi minima, magni incidunt veniam rem ratione quam, eum architecto doloribus dolorem quas.
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                                <div class="col-lg-4">
                                    <div class="card-body text-center pb-3">
                                        <div class="container">
                                            <div class="card card-profile shadow">
                                                <div class="px-3">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-3 order-lg-2">
                                                            <div class="card-profile-image">
                                                                <a href="https://www.linkedin.com/in/samkitsharma/">
                                                                    {/* <img src={nishant} style={image}  /> */}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="text-center mt-5 pb-3">
                                                        <h3>Ritwik</h3>
                                                        <div class="h5 font-weight-400">Co-Founder</div>
                                                        <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum reiciendis, ullam vero quo doloremque vitae quibusdam officia eligendi minima, magni incidunt veniam rem ratione quam, eum architecto doloribus dolorem quas.
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default About
