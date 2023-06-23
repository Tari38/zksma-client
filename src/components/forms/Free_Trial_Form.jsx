import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./css/Form.css";

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
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Age Group</Form.Label>
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
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Choose Venue</Form.Label>
                    <Form.Select required>
                        <option>Select Venue</option>
                        <option value="hq">Aylesbury HQ</option>
                        <option value="bpcc">Buckingham Park Community Center</option>
                        <option value="flc">Fairford Leys Center</option>
                        <option value="hsms">Haddenham: St Mary's School</option>
                        <option value="hccs">Halton Community Combined School</option>               
                        <option value="nwjs">Nascot Wood Junior School</option>
                        <option value="prps">Princes Risborough Primary School</option>
                        <option value="whs">William Harding School</option>
                        <option value="wcc">Wingrave Community Center</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="form-group" controlId="validationStudentDetails">
                    <Form.Label className="form-label">Student Details</Form.Label>
                    <Form.Control className="form-input" type="text" placeholder="Students First Name" required>

                    </Form.Control>
                    <Form.Control className="form-input" type="text" placeholder="Students Last Name" required>

                    </Form.Control>
                    <Form.Select aria-label="select gender options" required>
                        <option>Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                    </Form.Select>
                    <Form.Control className="form-input" type="date" placeholder="Date of Birth" required />
                    <Form.Control className="form-input" as="textarea" placeholder="Any medical or special educational needs?" />
                    <br />
                    <p>Please check this box if you give the club consent to include photos of this student.<Form.Check className="mb-3" type="checkbox" name="ChkPhoto"></Form.Check>
                    </p>
                </Form.Group>    

                <br />

                <Form.Group className="form-group">
                    <Form.Label className="form-label">Your First Name:</Form.Label>
                    <Form.Control className="form-input" type="text" placeholder='Your first name' required />
                    <Form.Label className="form-label">Your Last Name:</Form.Label>
                    <Form.Control className="form-input" type="text" placeholder='Your last name' required />   
                </Form.Group>            

                <Form.Group className="form-group" controlId="formBasicEmail">
                    <Form.Label className="form-label">Email address:</Form.Label>
                    <Form.Control className="form-input" type="email" placeholder="Enter email" required />
                </Form.Group>
                    <small>
                        We'll never share your email with anyone else.
                    </small>

                <Form.Group className="form-group" controlId="formBasicPhone">
                    <Form.Label className="form-label">Phone:</Form.Label>
                    <Form.Control className="form-input" type="text" placeholder="Enter phone number" required />
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label className="form-label">Select Relationship:</Form.Label>
                        <Form.Select required>
                            <option>Select Relationship</option>
                            <option value="parent">Parent</option>
                            <option value="step-parent">Step-Parent</option>
                            <option value="grandparent">Grandparent</option>
                            <option value="guardian">Legal Guardian</option>
                            <option value="carer">Carer</option>
                            <option value="other-family">Family Member</option>
                            <option value="family-friend">Family Friend</option>
                            <option value="self">Self</option>
                        </Form.Select>
                </Form.Group>

                <Form.Group className="form-group" controlId="formPassword" >
                    <Form.Label className="form-label">Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Form.Group className="form-group">               
                    <Button type="submit" className="g-recaptcha free-trial-btn" data-sitekey="6LeuN8ImAAAAAKSe8bOtCEYQTcUd8FkueLFvnA7U" 
                    data-callback='onSubmit' 
                    data-action="./new_registration.aspx?oid=1456145&amp;I=0">
                        Submit
                    </Button>                
                </Form.Group>   
            </Form>
        </div>
    )
}