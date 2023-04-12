import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <div id="top">
            
            <Navbar expand="lg" collapseOnSelect className="navbar">
                <Container>  
                <Navbar.Brand className="nav-logo">
                    <span className="zks">ZKS</span>
                    <p className="nav-logo-p">Martial Arts</p>
                </Navbar.Brand>          
                <Navbar.Toggle className="nav-toggler" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav-links">
                        <NavLink className="nav-item" to="/">Home</NavLink>
                        {/* <NavLink className="nav-item" to="mabucks">MA Bucks</NavLink>
                        <NavLink className="nav-item" to="maherts">MA Herts</NavLink> */}
                        <NavLink className="nav-item" to="faq">FAQs</NavLink>
                        <NavLink className="nav-item" to="fees">Fees</NavLink>  
                        <NavLink className="nav-item" to="classes">Classes</NavLink>
                        <NavLink className="nav-item" to="groups">Groups</NavLink>                          
                    </Nav>
                        
                </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    )
}