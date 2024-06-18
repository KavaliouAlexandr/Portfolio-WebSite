import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import CV from '../assets/KavaliouAlexandrIT.pdf';



import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";



export const  NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href={CV} className={activeLink === 'link' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('link')}>CV</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/alexandr-kavaliou-695923203/"><img src={navIcon1} alt="" /></a>
                        <a href="/#"><img src={navIcon3} alt="" /></a>
                    </div>
                    <HashLink to='#connect'>
                <button className="vvd"><span>Connect</span></button>
                    </HashLink>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Router>
    );
}