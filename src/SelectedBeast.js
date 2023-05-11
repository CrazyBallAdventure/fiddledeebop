import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  handleClose = () => {
    this.props.handleClose(); // calls the handleClose function which is passed as a prop
  };

  render() {
    const beast = this.props.beast; // Assigns the value of the beast prop to a variable called 'beast'
    return (
      <Modal show={beast !== null} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{beast?.title}</Modal.Title> {/* Renders the title of the beast */}
        </Modal.Header>
        <Modal.Body>
          <img src={beast?.image_url} alt={beast?.title} style={{ maxWidth: '100%', maxHeight: '100%' }} /> {/* Renders the image of the beast with provided image URL, alt text, and styles */}
          <p>{beast?.description}</p> {/* Renders the description of the beast */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button> {/* Renders a Close button with the handleClose function as onClick event */}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
