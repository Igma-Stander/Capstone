import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

function ShippingModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shipping Information</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Information</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShippingModal;
