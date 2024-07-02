import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.svg";
import meter9 from "../assets/img/meter9.svg";
import meter10 from "../assets/img/meter10.svg";

export const  Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>
                            Stack
                        </h2>
                        <p>I possess extensive knowledge and experience in a variety of technologies, enabling me to effectively develop modern web applications.  My stack includes:</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter2} alt=""/>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                            </div>
                            <div className="item">
                                <img src={meter4} alt=""/>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                            </div>
                            <div className="item">
                                <img src={meter5} alt=""/>
                            </div>
                            <div className="item">
                                <img src={meter6} alt=""/>
                            </div>
                            <div className="item">
                                <img src={meter7} alt=""/>
                            </div>
                            <div className="item">
                                <img src={meter8} alt=""/>
                            </div>
                            <div className="item">
                                <img src={meter9} alt=""/>
                            </div>
                            <div className="item">
                                <img src={meter10} alt=""/>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )

}