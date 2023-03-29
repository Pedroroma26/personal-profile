import { Container, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useForm } from "@formspree/react";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});


  const [submitForm, isSubmitting] = useForm(process.env.REACT_APP_FORMSPREE_URL);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending...");

    const response = await fetch(process.env.REACT_APP_FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });

    setButtonText("Send");
    setFormDetails({
      name: "",
      email: "",
      message: "",
    });

    if (response.ok) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn animate__repeat-1 animate__slow" : ""} src={contactImg} alt="Contact Me"/>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn animate__repeat-1 animate__slow" : ""}>
                  <h2>Get in touch</h2>
                  <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" onSubmit={handleSubmit}>
                  <Row>
                      <Col xs={12} className="px-1">
                        <input type="text" name="name" value={formDetails.name} placeholder="Name" onChange={(e) => onFormUpdate('name', e.target.value)} required />
                      </Col>
                      <Col xs={12} className="px-1">
                        <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required ></textarea>
                        <button type="submit" disabled={isSubmitting}><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success-message"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
