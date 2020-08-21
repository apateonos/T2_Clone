import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  loginEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  loginPassWord = (e) => {
    this.setState({ password: e.target.value });
  };

  handleClick = () => {
    fetch("http://10.58.4.149:8000/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res.message));
  };

  render() {
    return (
      <main className="Login">
        <div className="headerImg">
          <span>
            <a href="#">Terms & Conditions</a>
          </span>
        </div>
        <div className="loginBox">
          <div className="contentHeader">
            <h2>Welcome back!</h2>
            <span>Enter your log in details below.</span>
          </div>
          <div className="formBox">
            <div>Fields marked* are mandatory.</div>
            <input
              onChange={this.loginEmail}
              className="inputBox"
              type="text"
              placeholder="Enter your email*"
            />
            <input
              onChange={this.loginPassWord}
              className="inputBox"
              type="text"
              placeholder="Enter your password*"
            />
            <input className="inputChek" type="checkbox" />
            <span>Remember me.</span>
            <button
              className="loginBtn"
              type="button"
              onClick={this.handleClick}
            >
              Login
            </button>
            <a className="findPassword" href="#">
              Forgotten password?
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
