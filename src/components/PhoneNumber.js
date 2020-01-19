import React from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


export class PhoneNumber extends React.Component {
  render() {
    return(
      <Form.Row>
        <Form.Label>전화</Form.Label>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Control as="select">
            <option>010</option>
            <option>011</option>
            <option>016</option>
            <option>017</option>
            <option>019</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Button variant="warning" type="submit">인증</Button>
        </Form.Group>

      </Form.Row>
    )
  }
};