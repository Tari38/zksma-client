import { Accordion } from "react-bootstrap";
import "./pages.css";

export default function FAQ() {
    return (
        <div className="main">
            <section id="faq-hero">
                <h1>Our Most Common FAQ's</h1>
            </section>
            <section id="common-qs">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="accordion-header"><h3>How do I register myself or my child for a free trial?</h3></Accordion.Header>
                            <Accordion.Body className="accordion-body">
                                <ol>
                                    <li>Simply click on the <strong>Free Trial Button</strong> and add your details.</li>
                                    <li>Select which group you would like to trial with.</li>
                                    <li>Select your choice of venue using the dropdown menu.</li>
                                    <li>If slots are available it will give you a choice of date and time.</li>
                                    <li>If no slots are currently available, select <strong>add to waiting list</strong> or <strong>try a different group?</strong></li>
                                    <li>If you have added yourself to a waiting list, we will get back to you as soon as we can with a trial date.</li>
                                </ol>
                                    
                            </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className="accordion-header"><h3>Can I just turn up for a free trial?</h3></Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            No, we are sorry, but we must ask you to book first. Some of our classes are full with a waiting list and we need to know when you are attending, as well as your contact details in case of an emergency. We take pride in making sure that we have the correct staff to student ratio and making sure students are supported.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="accordion-header"><h3>What should I expect at the free trial?</h3></Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            Hard work, so bring lots of water!
                            Please make sure to arrive on time, where one of our instructors will be pleased to greet you and answer any questions you may have.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className="accordion-header"><h3>What clothing or shoes should be worn?</h3></Accordion.Header>
                        <Accordion.Body className="accordion-body">
                            It is highly recommended to attend in comfortable sports wear.
                            Shoes are not worn on the mats, so please wear grip socks. These can also be purchased from our online shop.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </div>
    )
}