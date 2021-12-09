import React from 'react'
import contact from '../image/contact.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, NavDropdown } from 'react-bootstrap';
const Contact = () => {
    const heading = {

        color: "black",
        textAlign: "center",
        paddingTop: "300px"
    }
    const form = {
        border: '1px solid blue',
        borderRadius: '4px'

    };
    const image = {
        height: "50%",
        paddingTop: "10%"

    }
    return (
        <>
            {/* <section style={section}>
                <h1 style={heading}>Comming Soon..</h1>
            </section> */}
            <section name="Landing" class="aagam-landing-section container py-5 pb-0">
                <div class="row">
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0">
                        <div class="my-5 py-5 aagam-landing-text ">
                            <h1 class="dinot-haeding header">Contact Us

                            </h1>
                            <Form>
                                <Form.Group style={form} className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="text" placeholder="Full name*" autoComplete="offf" />

                                </Form.Group>

                                <Form.Group style={form} className="mb-3" controlId="formBasicPassword">

                                    <Form.Control type="text" placeholder="Email*" autoComplete="offf" />
                                </Form.Group>
                                <Form.Group style={form} className="mb-3" controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" rows={3} placeholder="Message*" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 justify-content-center align-items-center p-5 pb-0 padding-none-m">
                        <img class="landing-image" src={contact} style={image} />
                    </div>
                    <div class="arrow-right"></div>

                </div>

            </section>
        </>




    )
}

export default Contact
