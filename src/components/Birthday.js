import React from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";


export class Birthday extends React.Component {
  render() {
    const yearIndex = []
    for(let y=2020; y >= 1900 ; y--){yearIndex.push([y]);}

    const monthIndex = []
    for(let m=1; m <= 12; m++){monthIndex.push([m]);}

    const dayIndex = []
    for(let d=1; d <= 31; d++){dayIndex.push([d]);}

    const year = yearIndex.map((numbers, index) => (<option key={index}>{numbers}</option>));
    const month = monthIndex.map((numbers, index) => (<option key={index}>{numbers}</option>));
    const days = dayIndex.map((numbers, index) => (<option key={index}>{numbers}</option>));

    return(
      <Form.Row>
        <Form.Label>생일</Form.Label>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Control as="select">
            {year}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Control as="select">
            {month}
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Control as="select">
            {days}
          </Form.Control>
        </Form.Group>
      </Form.Row>
    )
  }
};