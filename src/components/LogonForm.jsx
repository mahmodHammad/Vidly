import React from "react";
import Loginform from '../common/login'
import joi from "joi-browser";

class Login extends Loginform {
  state = {
    data: {
      username: "",
      password: ""
    },
    error: {}
  };

  schema = {
    username: joi
      .string()
      .required()
      .label("UserName"),
    password: joi
      .string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // do server connection
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
          {this.renderInput("username" , "UserName")}           
          {this.renderInput("password" , "Password" ,"password")}           
          </div>
          {this.renderSubmitBtn("LOGin")}
        </form>
      </div>
    );
  }
}

export default Login;
