import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  handleClose = () => {
    this.props.handleClose();
  };

  render() {
    const beast = this.props.beast;
    return (
      <Modal show={beast !== null} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{beast?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={beast?.image_url} alt={beast?.title} style={{ maxWidth: '100%', maxHeight: '100%' }} />
          <p>{beast?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;