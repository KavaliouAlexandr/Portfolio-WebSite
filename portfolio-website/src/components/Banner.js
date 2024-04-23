import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
        }


    return(
        <section className="banner" id="home">
            <Container className="align-items-center">
                <span className="tagline">Welcome to my portfolio</span>
                <h1>{`Hi I'm Alexandr Kavaliou`}<span className="wrap">{text}</span></h1>
                <p1>Lorem Ipsum</p1>
                <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
            </Container>
        </section>
    )
}