import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/ProjImg1.png";
import projImg2 from "../assets/img/ProjImg2.png";
import projImg3 from "../assets/img/ProjImg3.png";
import projImg4 from "../assets/img/ProjImg4.png";
import projImg5 from "../assets/img/ProjImg5.png";
import projImg6 from "../assets/img/ProjImg6.png";
import { ProjectCard } from "./ProjectCard";


export const  Projects = () => {

    const projects = [
        {
          title: "Fibra.bel",
          description: " WebSite for Construction Company",
          imgUrl: projImg1,
          linkUrl: "https://github.com/KavaliouAlexandr/Fibra.bel-PR2.git"
        },
        {
          title: "Polish Lingua",
          description: "Front-End of language learning App",
          imgUrl: projImg2,
          linkUrl: "https://github.com/KavaliouAlexandr/Lingua.git"
        },
        {
          title: "Restauracja",
          description: "TypeScript Rest Api",
          imgUrl: projImg3,
          linkUrl: "https://github.com/KavaliouAlexandr/RestauracjaRestAPI-PR4.git"
        },
        {
          title: "ChatBot",
          description: "ChatBotJS with Open AI API",
          imgUrl: projImg4,
          linkUrl: "https://github.com/KavaliouAlexandr/ChatBotJS-PR3.git"
        },
        {
          title: " WebSite for Gaming Store",
          description: "Asp.Net Project with Back-End",
          imgUrl: projImg5,
          linkUrl: "https://github.com/KavaliouAlexandr/GameStore_Exam-PR1.git"
        },
        {
          title: "Simple To-Do List",
          description: "Using TypeScript, React, Bootstrap",
          imgUrl: projImg6,
          linkUrl: "https://github.com/KavaliouAlexandr/To-Do_PR6.git"
        },
      ];
    
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
                <h2>Projects</h2>
                <p>This project path demonstrates my comprehensive experience and dedication to mastering various aspects of web development, from frontend to backend, ensuring I can deliver high-quality, maintainable solutions for any project.</p>
              <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
}