import React from 'react'
import logo from '../image/logo.png';
import { Carousel } from 'react-bootstrap';
import '../roadMap.scss'
const RoadMap = () => {
    const sr = () => {

    };
    const $ = () => {

    }
    const ScrollReveal = () => {

    }
    const websiteLink = {
        textDecoration: 'none',
        color: '#000'
    }
    return (

        <>
            {

                $(function () {

                    window.sr = ScrollReveal();

                    if ($(window).width() < 768) {

                        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
                            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
                        }

                        sr.reveal('.js--fadeInRight', {
                            origin: 'right',
                            distance: '300px',
                            easing: 'ease-in-out',
                            duration: 800,
                        });

                    } else {

                        sr.reveal('.js--fadeInLeft', {
                            origin: 'left',
                            distance: '300px',
                            easing: 'ease-in-out',
                            duration: 800,
                        });

                        sr.reveal('.js--fadeInRight', {
                            origin: 'right',
                            distance: '300px',
                            easing: 'ease-in-out',
                            duration: 800,
                        });

                    }

                    sr.reveal('.js--fadeInLeft', {
                        origin: 'left',
                        distance: '300px',
                        easing: 'ease-in-out',
                        duration: 800,
                    });

                    sr.reveal('.js--fadeInRight', {
                        origin: 'right',
                        distance: '300px',
                        easing: 'ease-in-out',
                        duration: 800,
                    });

                })}
            <section name="Landing" class="aagam-landing-section container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div class="my-5 py-5 aagam-landing-text ">
                            <h1 class="dinot-haeding header">Timeline

                            </h1>
                            <p class="pt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quisquam autem minima tempore, unde provident at culpa itaque nemo dignissimos sapiente perspiciatis vel expedita laboriosam vitae! Fuga nihil omnis accusamus.
                            </p>
                            {/* <div class="d-flex pt-4 d-none d-lg-block d-xl-block d-md-block">
                                <a href="/course" class="btn btn-primary mr-2 aagam-btn-primary">Get Started</a>

                            </div> */}
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 padding-none-m my-3">
                        {/* <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block landing-image"
                                    src="https://source.unsplash.com/480x300/?Timeline"
                                    alt="First slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block landing-image"
                                    src="https://source.unsplash.com/480x300/?Course"
                                    alt="Second slide"
                                />

                            </Carousel.Item>

                        </Carousel> */}
                        <img class="landing-image" src='https://source.unsplash.com/350x300/?Timeline' />
                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>



            <section className="timeline">
                <div className="container">
                    <div className="timeline-item">
                        <div className="timeline-img"></div>
                        <div className="timeline-content js--fadeInLeft">
                            <h2>Registration </h2>
                            {/* <div className="date">1 MAY 2016</div> */}
                            <p className='para'>• To register, connect directly through website </p>
                            <p className='para'><a className='websiteLink' style={websiteLink} href="https://udeline.herokuapp.com">• https://udeline.herokuapp.com</a></p>

                            <p className='para'>• Contact no – 9311898085 </p>
                            <p className='para'>• Email- udelineindia@gmail.com</p>
                            {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div className="timeline-img"></div>
                        <div class="timeline-content js--fadeInRight">
                            <h2>Exam Preperation </h2>

                            {/* <div class="date">25 MAY 2016</div> */}
                            <p className='para'>• Chapter and unit wise live classes  </p>
                            <p className='para'>• Doubt sessions every Sunday </p>
                            <p className='para'>• Study material </p>
                            <p className='para'>•	MCQ’s  </p>
                            <p className='para'>•	Test every week  </p>

                        </div>

                    </div>
                    <div className="timeline-item">
                        <div className="timeline-img"></div>

                        <div className="timeline-content js--fadeInLeft">
                            <h2>College Guidance  </h2>
                            {/* <div className="date">1 MAY 2016</div> */}
                            <p className='para'>• We will guide you to get the best college across India.  </p>
                            <p className='para'>•	You name the college and we will provide you every detail about that college. </p>
                            <p className='para'>•	Personalized Guidance</p>
                            {/* <a className="bnt-more" href="javascript:void(0)">More</a> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default RoadMap
