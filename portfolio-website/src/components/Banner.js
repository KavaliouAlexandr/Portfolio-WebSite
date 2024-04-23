import Container from "react-bootstrap/esm/Container";
import ArrowRightCircle from "react-bootstrap-icons";

export const Banner = () => {
    return(
        <section className="banner" id="home">
            <Container className="align-items-center">
                <span className="tagline">Welcome to my portfolio</span>
                <h1>{`Hi I'm Alexandr Kavaliou`}<span className="wrap">Web developer</span></h1>
                <p1>Lorem Ipsum</p1>
                <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
            </Container>
        </section>
    )
}