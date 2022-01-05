import React from 'react'
// import { Card, Button, Container, NavDropdown } from 'react-bootstrap';
import physics from '../image/physics.jpg'
import '../index.css'
const Course = () => {

    return (
        <>
            <section id="course">
                <div className="display-2 text-center">
                    Explore More
                </div>
                <p>Confused on which course to take? We have got you covered. Browse courses and find out the best course for you.
                    Udeline is our attempt to teach basics and those techniques to people in short time which took ages to learn.</p>
                <a href='https://forms.gle/SHiEJRKcwEMDUwN1A' className='courseButton text-center'>Enroll Now</a>
                {/* <div className="text-black mx-auto mt-5 upper">
                    


                </div> */}

            </section>
            {/* <div className="header pb-6 d-flex align-items-center course">

                <span className="mask opacity-7 course-grad"></span>
                <div className="container d-flex align-items-center">
                    <div className="text-black mx-auto mt-5 upper">
                        <div className="display-2 text-center">
                            Explore More
                        </div>
                        <p>Confused on which course to take? We have got you covered. Browse courses and find out the best course for you.
                            Udeline is our attempt to teach basics and those techniques to people in short time which took ages to learn.</p>
                            <a className='courseButton text-center'>Enroll Now</a>

                           
                    </div>
                </div>
            </div> */}
            <div class="container my-4">
                {/* <h1 style={subHead} className='subHead'>OUR COURSES</h1> */}


                <ul class="cards fadeInUp animated animatedFadeInUp" data-aos="fade-up">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={physics} /></div>
                            <div class="card_content">
                                <h2 class="card_title">Physics Term 2 Crash Course</h2>
                                <li>Live Classes</li>
                                <li>Doubt Classes every sunday</li>
                                <li>Personalised Guidance</li>
                                <li>Mentors</li>
                                <li>Feedbacks after every class</li>
                                <li></li>
                                <button type="button" class="price">Rs. 299</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={physics} /></div>
                            <div class="card_content">
                                <h2 class="card_title">Chemistry Term 2 crash course </h2>
                                <li>Live Classes</li>
                                <li>Doubt Classes every sunday</li>
                                <li>Personalised Guidance</li>
                                <li>Mentors</li>
                                <li>Feedbacks after every class</li>
                                <li></li>
                                <button type="button" class="price">Rs. 299</button>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src={physics} /></div>
                            <div class="card_content">
                                <h2 class="card_title">Math Term 2 Crash Course</h2>
                                <li>Live Classes</li>
                                <li>Doubt Classes every sunday</li>
                                <li>Personalised Guidance</li>
                                <li>Mentors</li>
                                <li>Feedbacks after every class</li>
                                <li></li>
                                <button type="button" class="price">Rs. 299</button>
                            </div>
                        </div>
                    </li>


                </ul>
            </div>


        </>
    )
}

export default Course
