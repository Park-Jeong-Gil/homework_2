import React from 'react';
import Form from "react-bootstrap/Form";
// components
import {Id} from "./components/Id";
import {Password} from "./components/Password";
import {Gender} from "./components/Gender";
import {Birthday} from "./components/Birthday";
import {PhoneNumber} from "./components/PhoneNumber";
import {AgreementCheck} from "./components/AgreementCheck";
import {SumitButton} from "./components/SumitButton";
// style sheet
import './resources/css/App.scss'

import Container from "react-bootstrap/Container";
// jQuery
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class App extends React.Component {
  render(){
    return(
      <Container className='joinForm'>
        <Form>
          <fieldset>
            <legend>회원가입</legend>

            <Id/>
            <Password/>
            <Gender/>
            <Birthday/>
            <PhoneNumber/>
            <AgreementCheck/>
            <SumitButton/>

          </fieldset>
        </Form>
      </Container >
    );
  }
};



export default App;