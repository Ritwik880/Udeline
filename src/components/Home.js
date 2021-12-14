import React from 'react'
import Header from './Header'
import logo from '../image/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../mobile.css';

const Home = () => {
    const headdiv = {
        backgroundColor: '#a29bfe',
        width: '100%'

    }
    const heading = {
        textAlign: 'center'

        // height: '4%'

    }

    return (
        <>
            {/* <Header /> */}

            <section name="Landing" class="aagam-landing-section container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div class="my-5 py-5 aagam-landing-text ">
                            <h1 class="dinot-haeding header">Udeline

                            </h1>
                            <p class="pt-4">Udeline is India`s largest and fastest-growing community of technology innovators including startups and student innovators.
                            </p>
                            <div class="d-flex pt-4 d-none d-lg-block d-xl-block d-md-block">
                                <a href="/course" class="btn btn-primary mr-2 aagam-btn-primary">Get Started</a>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <img class="landing-image" src={logo} />
                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>
            {/* <div class="my-5 py-5 aagam-landing-text" style={headdiv}>
                <h1 class="dinot-haeding header" style={heading} className='animatedhead'>What We Do?

                </h1>


            </div>
            <section name="Landing" class="aagam-landing-section container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 p-5 pb-0">

                    </div>

                    <div class="arrow-right"></div>

                </div>

            </section> */}





        </>
    )
}

export default Home
