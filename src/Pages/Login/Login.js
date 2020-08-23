import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      pwpass: false,
      errorActive: true,
    };
  }
  loginEmail = (e) => {
    this.setState({ email: e.target.value });
    if (this.state.email.length > 5 && this.state.email.includes("@")) {
      this.setState({ errorActive: true });
    } else {
      this.setState({ errorActive: false });
    }
  };

  loginPassWord = (e) => {
    this.setState({ password: e.target.value });
    if (this.state.password.length >= 8) {
      this.setState({ pwpass: true });
    } else {
      this.setState({ pwpass: false });
    }
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
    console.log(this.state.errorActive);
    return (
      <main className="Login">
        <div className="headerImg">
          <span className="headeText">
            <a href="#">Terms & Conditions</a>
          </span>
        </div>
        <div className="loginBox">
          <div className="contentHeader">
            <h2 className="contentText">Welcome back!</h2>
            <span className="contentSubText">
              Enter your log in details below.
            </span>
          </div>
          <div className="formBox">
            <span className="formBoxText">Fields marked* are mandatory.</span>

            <input
              onChange={this.loginEmail}
              className={this.state.errorActive ? "inputEmail" : "inputBox"}
              type="text"
              placeholder="Enter your email*"
            />
            <img
              className={this.state.errorActive ? "succesImg" : "errorImg"}
              src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598112872308/images/validation_success.svg"
            />
            <span
              className={this.state.errorActive ? "displayNone" : "displayOn"}
            >
              <img
                className={
                  this.state.errorActive ? "errorIconNone" : "errorIcon"
                }
                src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598112872308/images/error_cross.svg"
              />
              {this.state.email.length === 0
                ? "please enter your email address"
                : "Please enter a valid email address."}
            </span>
            <span
              className={this.state.errorActive ? "displayOn" : "displayNone"}
            ></span>

            <input
              onChange={this.loginPassWord}
              className={this.state.pwpass ? "inputPassWord" : "inputBox"}
              type="password"
              placeholder="Enter your password*"
            />
            <img
              className={this.state.pwpass ? "succesImg" : "errorImg"}
              src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598112872308/images/validation_success.svg"
            />
            <img
              className={this.state.pwpass ? "errorIconNone" : "errorIcon"}
              src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598112872308/images/error_cross.svg"
            />
            <span className={this.state.pwpass ? "displayNone" : "displayOn"}>
              {this.state.password.length > 8
                ? "Please enter your password"
                : "The information you have entered is invalid.Please try again."}
            </span>

            <span
              className={this.state.pwpass ? "displayOn" : "displayNone"}
            ></span>

            <div className="inputChekBox">
              <input className="inputChek" type="checkbox" />
              <span className="inpuChekText">Remember me.</span>
            </div>
            <button
              className={
                this.state.email.length >= 5 &&
                this.state.email.includes("@") &&
                this.state.password.length >= 8
                  ? "nextLoginBtn"
                  : "prevLoginBtn"
              }
              type="button"
              onClick={this.handleClick}
              disabled={
                this.state.email.length >= 5 &&
                this.state.email.includes("@") &&
                this.state.password.length >= 9
                  ? false
                  : true
              }
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
