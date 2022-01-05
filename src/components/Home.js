import React from 'react'
import logo from '../image/logo.png';
import wedo from '../image/wedo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../mobile.css';


const Home = () => {
    const firstSection = {
        height: '100vh'
    }
    const second_section = {
        backgroundColor: '#f9f8f8'
    }
    // const firstSectionRow = {
    //     marginTop: '8%'
    // }
    const form ={
        textDecoration: 'none'
    }

    return (
        <>
            {/* <Header /> */}
           


            <section style={firstSection} name="Landing" class="aagam-landing-section container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div class="my-5 py-5 aagam-landing-text ">
                            <h1 class="dinot-haeding header">Udeline

                            </h1>
                            <p class="pt-4">Udeline is India`s largest and fastest-growing community of technology innovators including startups and student innovators.
                            </p>
                            <div class="d-flex pt-4">
                                <a href="/course" class="btn btn-primary mr-2 aagam-btn-primary">Get Started</a>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 d-flex justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <img class="home-image" src={logo} alt='home-img' />
                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>
            <section style={second_section} name="Landing" class="aagam-landing-section container py-5 pb-0 my-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <img className='second_home' src={wedo} alt='second-img' />

                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <div class="my-5 py-5 aagam-landing-text ">
                            <h1 class="dinot-haeding header">What We Do?

                            </h1>
                            <li>We create a safe space for you by giving live classes by our experienced educators. </li>
                            <li>Get hassle free education not only at your fingertips but also at the comfort of your own home. </li>
                            <li>We also provide you one on one paid personalized paid tutoring at your own timing.</li>
                            <li>Udeline accompanies you during your college selection procedure. </li>
                            {/* <p class="pt-4">Udeline is India`s largest and fastest-growing community of technology innovators including startups and student innovators.
                            </p> */}
                            <div class="d-flex pt-4">
                                <a style={form} href="https://forms.gle/SHiEJRKcwEMDUwN1A" class="mr-2 aagam-btn-primary">Join Us</a>

                            </div>
                        </div>

                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>









        </>
    )
}

export default Home
