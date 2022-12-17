import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IModalCustomProps } from "../../utils/models";

const ModalCustom = ({
  show,
  onHandleClose,
  title,
  contentModal
}: IModalCustomProps): React.ReactElement => {
  
  const handleClose = () => {
    onHandleClose(false);
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{contentModal}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCustom;
