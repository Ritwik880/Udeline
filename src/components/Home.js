import React from 'react'
import logo from '../image/logo.png';
const Home = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                        <ul class="navbar-nav ms-auto flex-nowrap">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Crash Course
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">For class 12th</a></li>

                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <section name="Landing" class="aagam-landing-section container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div class="my-5 py-5 aagam-landing-text ">
                            <h1 class="dinot-haeding header">Udeline

                            </h1>
                            <p class="pt-4">Udeline is India`s largest and fastest-growing community of technology innovators including startups and student innovators.
                            </p>
                            <div class="d-flex pt-4 d-none d-lg-block d-xl-block d-md-block">
                                <a href="#" class="btn btn-primary mr-2 aagam-btn-primary">Get Started</a>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <img class="landing-image" src={logo} />
                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>
            <footer class="container-fluid my-0 py-3 text-light">
                <p class="mb-0 text-center">&copy; 2021-2022 | Udeline</p>
                <p class="mb-0 text-center">
                    <a href="#">Back to top |</a>
                    <a href="#">Privacy |</a>
                    <a href="#">Terms</a>
                </p>

            </footer>


        </>
    )
}

export default Home
