import React from 'react';
import Form from "react-bootstrap/Form";

export class Id extends React.Component {
  render() {
    return(
      <Form.Row>
        <Form.Label className='hiddenLabel'>Email address</Form.Label>
        <Form.Group controlId="formBasicId">
          <Form.Control className='userId' type="id" placeholder="아이디" />
        </Form.Group>
      </Form.Row>
    )
  }
};
