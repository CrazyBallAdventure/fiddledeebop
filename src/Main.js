import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {data.map((beast) => (
            <Col sm={6}>
              <HornedBeast
                key={beast.keyword}
                title={beast.title}
                imageUrl={beast.image_url}
                description={beast.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;