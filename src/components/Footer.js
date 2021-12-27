import React from 'react'
import '../footer.css'
const Footer = () => {
    return (
        <>
            <div class="footer-clean">
                <footer>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-sm-4 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-4 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Legacy</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-4 col-md-3 item">
                                <h3>Careers</h3>
                                <ul>
                                    <li><a href="#">Job openings</a></li>
                                    <li><a href="#">Employee success</a></li>
                                    <li><a href="#">Benefits</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 item social"><a href="https://m.facebook.com/109266201624167/"><i class="icon ion-social-facebook"></i></a>
                            <a href=""><i class="icon ion-social-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/udeline"><i class="icon ion-social-linkedin"></i></a>
                            <a href="https://instagram.com/udelineindia?utm_medium=copy_link"><i class="icon ion-social-instagram"></i></a>
                                <p class="copyright">Udeline © 2021</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Footer
