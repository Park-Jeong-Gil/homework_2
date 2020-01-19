import React from 'react';
import Form from "react-bootstrap/Form";

export class Password extends React.Component {
  render() {
    return(
      <Form.Row>
        <Form.Label className="hiddenLabel">Password</Form.Label>
        <Form.Group className='userPw' controlId="formBasicPassword">
          <Form.Control type="password" placeholder="비밀번호" />
        </Form.Group>
      </Form.Row>
    )
  }
};