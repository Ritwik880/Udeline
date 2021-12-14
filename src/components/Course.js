import React from 'react'
import { Card, Button, Container, NavDropdown } from 'react-bootstrap';
import '../index.css'
const Course = () => {
    const buyCourse = {
        // height: '300px',
        // backgroundColor: '#e9ecef',
        // // color: '#000'
        // textDecoration: 'underline'
    }
    const subHead = {
        textAlign: 'center',
        backgroundColor: 'antiquewhite'
    }
    return (
        <>
            <div className="header pb-6 d-flex align-items-center course">

                <span className="mask opacity-7 course-grad"></span>
                <div className="container d-flex align-items-center">
                    <div className="text-black mx-auto mt-5 upper">
                        <div className="display-2 text-center">
                            Explore More
                        </div>
                        <p>Confused on which course to take? We have got you covered. Browse courses and find out the best course for you.
                            Udeline is our attempt to teach basics and those techniques to people in short time which took ages to learn.</p>

                    </div>
                </div>
            </div>
            <div class="container my-4">
                <h1 style={subHead} className='subHead'>OUR COURSES</h1>


                <ul class="cards fadeInUp animated animatedFadeInUp" data-aos="fade-up">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://source.unsplash.com/500x250/?coding" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Test</h2>
                                <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident dolore tenetur iste nesciunt repellendus reprehenderit minus odio cum commodi assumenda, ipsam tempore itaque necessitatibus beatae veritatis quas recusandae? Sint.
                                </p>
                                <button type="button" class="btn btn-primary">Buy Now</button>




                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://source.unsplash.com/500x250/?javascript" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Test</h2>
                                <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident dolore tenetur iste nesciunt repellendus reprehenderit minus odio cum commodi assumenda, ipsam tempore itaque necessitatibus beatae veritatis quas recusandae? Sint.
                                </p>
                                <button type="button" class="btn btn-primary">Buy Now</button>

                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://source.unsplash.com/500x250/?Gaming" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Test</h2>
                                <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident dolore tenetur iste nesciunt repellendus reprehenderit minus odio cum commodi assumenda, ipsam tempore itaque necessitatibus beatae veritatis quas recusandae? Sint.
                                </p>
                                <button type="button" class="btn btn-primary">Buy Now</button>


                            </div>
                        </div>
                    </li>

                </ul>
            </div>


        </>
    )
}

export default Course
