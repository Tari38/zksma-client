import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavLogo from "../../assets/logos/newlogo.png";
import "./NavBar.css";

export default function NavBar() {
    return (
        <div id="top">
            
            <Navbar expand="lg" collapseOnSelect className="navbar">
                <Container fluid>  
                <Navbar.Brand>
                    <img src={NavLogo} className="nav-logo" alt=""></img>
                    {/* <span className="zks">ZKS</span>
                    <p className="nav-logo-p">Martial Arts</p> */}
                </Navbar.Brand>          
                <Navbar.Toggle className="nav-toggler" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-links">
                        <NavLink className="nav-item" to="/">Home</NavLink>
                        <NavLink className="nav-item" to="fees">Pricing</NavLink>  
                        <NavLink className="nav-item" to="about">About</NavLink>
                        <NavLink className="nav-item" to="faq">FAQs</NavLink>
                        <NavLink className="nav-item" to="groups">Groups</NavLink> 
                        <NavLink className="nav-item" to="shop">Shop</NavLink>       
                        <NavLink className="nav-item" to="timetable">Timetable</NavLink>   
                        <NavLink className="nav-item" to="grading">Grading & Exams</NavLink>                
                        <NavLink className="nav-item" to="contact">Contact</NavLink>   
                    </Nav>                        
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    )
}