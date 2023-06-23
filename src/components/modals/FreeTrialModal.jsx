import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FreeTrialForm from "../forms/Free_Trial_Form.jsx";

export default function FreeTrialModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="free-trial-btn" onClick={handleShow}>
        Book a Free Trial
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Free Trial Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FreeTrialForm />
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}