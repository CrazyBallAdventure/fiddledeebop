import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  handleBeastClick = (beast) => {
    this.props.onSelectBeast(beast);
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          {data.map((beast) => (
            <Col sm={6} className="text-center">
              <HornedBeast
                key={beast.keyword}
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
                onClick={() => this.handleBeastClick(beast)}
              />

            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;