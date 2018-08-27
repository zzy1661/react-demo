import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, hashHistory } from "react-router-dom";
import './index.css';
class Login extends Component {
    constructor(prop) {
        super(prop);
    }
    login= ()=> {
        console.log('login');
        this.props.history.push('/index');
    }

    render() {
      return (
        <div >
             <button onClick={this.login}>login</button>
        </div>
      );
    }
  }
  
  export default Login;