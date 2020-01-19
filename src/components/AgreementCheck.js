import React from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Toggle from "react-bootstrap-toggle";

export class AgreementCheck extends React.Component {

  constructor() {
    super();
    this.state = { toggleActive: false };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({ toggleActive: !this.state.toggleActive });
  }

  render() {
    return(
      <Form.Row>
        <Form.Group as={Col} xs={8}>
          <Form.Text className="text-muted">
            모든 약관 내용에 동의 합니다.
          </Form.Text>
        </Form.Group>
        <Form.Group as={Col} xs={4}>
          <Toggle
            onClick={this.onToggle}
            on={<span className='toggleText'>동의</span>}
            off={<span className='toggleText'>비동의</span>}
            size="xs"
            handlestyle="info"
            offstyle="default"
            onstyle="success"
            active={this.state.toggleActive}
          />
        </Form.Group>
      </Form.Row>
    )
  }
};