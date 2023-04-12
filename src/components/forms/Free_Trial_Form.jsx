import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FreeTrialForm() {

    return (
        <div className="free-trial-form-container">          
            <Form id="free-trial-form">
                <Form.Group>
                    <Form.Label>Age Group</Form.Label>
                    <Form.Select placeholder="Select Age Group">
                        <option value="lil-dragons">Lil Dragons (3-4 years)</option>
                        <option value="mini-ninjas">Mini Ninjas (5-7 years)</option>
                        <option value="ma-juniors">MA Juniors (8-11 years)</option>
                        <option value="ma-teens">MA Teens (12-16 years)</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Choose Venue</Form.Label>
                    <Form.Select>
                        <option></option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}