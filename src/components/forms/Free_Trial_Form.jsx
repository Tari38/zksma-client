import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FreeTrialForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    
    return (
        <div className="free-trial-form-container">          
            <Form id="free-trial-form" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Age Group</Form.Label>
                    <Form.Select required placeholder="Select Age Group">
                        <option>Select Group</option>
                        <option value="lil-dragons">Lil Dragons (3-4 years)</option>
                        <option value="mini-ninjas">Mini Ninjas (5-7 years)</option>
                        <option value="ma-juniors">MA Juniors (8-11 years)</option>
                        <option value="ma-teens">MA Teens (12-16 years)</option>
                        <option value="sen1">SEN (4-11 years)</option>
                        <option value="sen2">SEN (8-11 years)</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Choose Venue</Form.Label>
                    <Form.Select required>
                        <option>Select Venue</option>
                        <option value="bpcc">Buckingham Park Community Center</option>
                        <option value="flc">Fairford Leys Center</option>
                        <option value="hsms">Haddenham: St Mary's School</option>
                        <option value="hccs">Halton Community Combined School</option>
                        <option value="lms">Long Marston School</option>
                        <option value="nwjs">Nascot Wood Junior School</option>
                        <option value="prps">Princes Risborough Primary School</option>
                        <option value="whs">William Harding School</option>
                        <option value="wcc">Wingrave Community Center</option>
                        <option value="hq">ZKSMA HQ</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="validationStudentDetails">
                    <Form.Label>Student Details</Form.Label>
                    <Form.Control type="text" placeholder="Students First Name" required></Form.Control>
                    <Form.Control type="text" placeholder="Students Last Name" required></Form.Control>
                    <Form.Select required>
                        <option>Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other (please specify)</option>
                    </Form.Select>
                    <Form.Control type="date" placeholder="Date of Birth" required></Form.Control>
                    <Form.Control as="textarea" placeholder="Any medical or special educational needs?"></Form.Control>
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