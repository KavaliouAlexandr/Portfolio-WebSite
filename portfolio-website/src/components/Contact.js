import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
        const onSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
        
            formData.append("access_key", "0d1765e9-cf49-4b8c-9e1c-ac7877acfd28");
        
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
        
            const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
            }).then((res) => res.json());
        
            if (res.success) {
            console.log("Success", res);
            }
        };
        
        return (
            <section className="contact" id="connect">
            <Container>
              <Row className="align-items-center">
                <Col size={12} md={6}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                    }
                  </TrackVisibility>
                </Col>
                <Col size={12} md={6}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Get In Touch</h2>
                      <form onSubmit={onSubmit}>
                        <Row>
                          <Col size={12} sm={6} className="px-1">
                          <input type="text" name="name"/>
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                          <input type="email" name="email"/>
                          </Col>
                          <Col size={12} className="px-1">
                          <textarea name="message"></textarea>
                          <button type="submit">Submit Form</button>
                          </Col>
                        </Row>
                      </form>
                    </div>}
                  </TrackVisibility>
                </Col>
              </Row>
            </Container>
          </section>
        );
        }

