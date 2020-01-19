import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class SumitButton extends React.Component {
  render() {
    return(
      <Form.Row>
        <Button className='submitButton' variant="warning" type="submit">가입하기</Button>
      </Form.Row>
    )
  }
};