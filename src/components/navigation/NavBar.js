import { Container, Offcanvas, Nav, Navbar, DropdownButton, Dropdown, NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavLogo from "../../assets/logos/newlogo.png";
import "./NavBar.css";

export default function NavBar() {

    return (
        <div id="top">
            
            <Navbar expand="md" collapseOnSelect className="navbar">
                <Container fluid>  
                <Navbar.Brand>
                    <img src={NavLogo} className="nav-logo" alt=""></img>
                    {/* <span className="zks">ZKS</span>
                    <p className="nav-logo-p">Martial Arts</p> */}
                </Navbar.Brand>          
                <Navbar.Toggle className="nav-toggler" aria-controls="responsive-navbar-nav" />
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>ZKS Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="me-auto nav-links nav">
                        
                        <NavLink exact className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Home</NavLink>

                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="fees">Pricing</NavLink>

                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="about">About</NavLink>

                        <DropdownButton as={NavItem} title="FAQS" id="dropdown-basic-button">
                            <Dropdown.Menu id="nav-dropdown-menu">
                                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="faq">Common FAQs</NavLink>
                                <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="grading">Grading & Exams FAQ</NavLink>
                            </Dropdown.Menu>
                        </DropdownButton>
                        
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="shop">Shop</NavLink> 

                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')}to="contact">Contact</NavLink>   
                    </Nav>   
                    </Offcanvas.Body>                     
                </Navbar.Offcanvas>
                </Container>
            </Navbar>
            
        </div>
    )
}