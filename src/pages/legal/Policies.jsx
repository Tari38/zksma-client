import { Button, ButtonGroup, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import InterestedCard from "../../components/cards/InterestedCard"
import "./legal.css";

export default function Policies() {    
    

    return (
        <>
        <section id="policies-hero">
            <div className="hero-text">
                <h1>ZKS Martial Arts Policies, Terms & Conditions</h1>
                <p>Within this page you will find our terms and conditions for membership at ZKS Martial Arts. 
                    <br />We want you to be aware of these terms and conditions and that you may have already signed and agreed to them in our Members Area.</p>
            </div>
            <ButtonGroup className="btn-group">
                <Button className="home-btn" as={NavLink} to="/">Home</Button>
                <Button className="member-btn" as={NavLink} to="https://www.smallshout.co.uk/members/memberslogon.aspx?oid=1456145">Members Area</Button>
            </ButtonGroup>
        </section>

        <section id="policies-agreement">        
            <Card className="member-agreement">
                <Card.Header>Member Agreement</Card.Header>
                <Card.Body>Now that you have become a member of the ZKS Martial Arts family we want you to be aware of our terms of service. <br />
                We want all of our members and staff to be in as safe an environment as possible, so it is important that you take the time to look over our membership agreement and our other policies. 
                    <br/>
                </Card.Body>
                <Card.Footer>
                    <Button className="card-footer-btn" as={NavLink} to="http://www.zksmartialarts.co.uk/Documents/ZKSmemberagreement022.pdf">View the Member Agreement PDF
                    </Button>
                </Card.Footer>
            </Card>            
            
       
            <Card className="payment-policy">
                <Card.Header>Payment Policy</Card.Header>
                    <Card.Body>We are often get asked about our membership payments. In the meantime, why not take a look at our payment FAQS.
                        <br />
                        This will explain our payment structure and our payment policy. 
                        <br />
                        Please make sure that you fill in the "Account" section with all your details. 
                        <br />
                        We would also recommend that you add any additional contacts to help us contact you in case of an emergency. 
                        <br />
                    </Card.Body>
                    <Card.Footer>
                        <Button className="card-footer-btn" as={NavLink} to="http://www.zksmartialarts.co.uk/Documents/PaymentFAQS2022-23.pdf">View the Payment Policy PDF
                        </Button>
                    </Card.Footer>
            </Card>               
       
        
            <Card className="cancellation-policy">
                <Card.Header>Event(s) Cancellation Policy</Card.Header>
                    <Card.Body>If you wish to cancel your booking completely and it falls before the booking end date, we can cancel your booking and issue a refund if you have already paid. 
                        <br />
                        To inform us that you wish to cancel it is best to go online to our members area and use the SmallShout messaging function and inform us of the event.
                        <br />
                        <strong>If you cancel after the booking end date or simply not attend the event and do not inform us then we will not be able to issue a refund.
                        </strong>
                    </Card.Body>         
                    <Card.Footer>
                        <Button className="card-footer-btn" as={NavLink} to="http://www.zksmartialarts.co.uk/Documents/Eventcancellation2022-2023.pdf">View Events Cancellation PDF
                        </Button>
                    </Card.Footer>
                </Card>
        
                <Card className="membership-cancellation-policy">
                    <Card.Header>Cancellation policy</Card.Header>
                        <Card.Body>We ask that you provide a 1 month notice of cancellation as we take monies in advance so you may still need to pay your last payment after your child has left the club for classes.
                            <br /> 
                        </Card.Body>
                        <Card.Footer>
                            <Button className="card-footer-btn" as={NavLink} to="http://www.zksmartialarts.co.uk/Documents/membercancellation2022-2023.pdf">View Membership Cancellation Policy
                            </Button> <br />
                            If you still wish to cancel then please email us;
                        or better still contact us via the members area. 
                        </Card.Footer>
                </Card>      
    </section>
    
    <section >
        
        <iframe title="pure chat" src="https://app.purechat.com/w/DF12D46B" style={{height:"600px", width:"600px"}}></iframe>
        
        <div id="subscribe">
            <h1>Sign Up Today</h1>       
            <InterestedCard />
        </div>      
            <em>We never share your information or use it to spam you, we just want you to know about all the fun stuff we are doing! </em>
    </section>
    </>
    )
}