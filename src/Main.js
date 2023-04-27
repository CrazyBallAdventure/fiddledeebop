import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  handleBeastClick = (beast) => {
    this.props.onSelectBeast(beast);
  };

  handleFilterChange = (event) => {
    const selectedHorns = parseInt(event.target.value);
    this.setState({ selectedHorns });
  };

  state = {
    beasts: data,
    selectedHorns: null
  };

  render() {
    const { selectedHorns } = this.state;
    const filteredBeasts = selectedHorns
      ? data.filter((beast) => beast.horns === selectedHorns)
      : data;
  
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <Form.Group>
              <Form.Label>Filter by number of horns:</Form.Label>
              <Form.Control as="select" onChange={this.handleFilterChange}>
                <option value="">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Control>
            </Form.Group>
            </Col>
          {filteredBeasts.map((beast) => (
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