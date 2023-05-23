import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/forms/Contact_Form";
import "./css/Contact.css";

export default function Contact() {
    return (
        <div className="contact-heading">
                    <h1>Get in Contact</h1>
                    <div className="contact-info">
                        <p>
                            <FontAwesomeIcon 
                            icon={faPhone} 
                            size="lg" 
                            style={{color: "#ffffff",}} /><br  />   
                            <a className="contact-link" href={"tel:01296392630"}>
                                01296 392630
                            </a>
                        </p>
                        <p>
                            <FontAwesomeIcon 
                            icon={faEnvelope} 
                            size="lg" 
                            style={{color: "#ffffff",}} /><br  />    
                            <a className="contact-link" href={"mailto: info@zksma.co.uk"}>
                                info@zksma.co.uk
                            </a>
                        </p>
                    </div>  
                    <br />
                    <ContactForm />
                </div>
    )
}