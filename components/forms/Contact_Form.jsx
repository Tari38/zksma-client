import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/Form.css";

export default function ContactForm() {
    return (
        <Form id="contact-form">
            <Form.Group className="form-group">
                <Form.Label className="form-label">Your Name:</Form.Label>
                <Form.Control className="form-input" type="text" placeholder="Your Name"></Form.Control>
            </Form.Group>
            <Form.Group className="form-group">
                <Form.Label className="form-label">Your Email:</Form.Label>
                <Form.Control className="form-input" type="email" placeholder="Your Email"></Form.Control>
            </Form.Group>
            <Form.Group className="form-group">
                <Form.Label className="form-label">Your Message:</Form.Label>
                <Form.Control className="form-input" as="textarea" placeholder="Your Message"></Form.Control>
            </Form.Group>
            <Button id="contact-btn" type="submit">
                    Send Message
            </Button>
        </Form>
    )
}