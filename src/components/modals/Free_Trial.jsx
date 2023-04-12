import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FreeTrialForm from '../forms/Free_Trial_Form';

export default function FreeTrialModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Free Trial Registration Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FreeTrialForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
