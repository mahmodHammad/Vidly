import React from "react";
import joi from "joi-browser";
import RegisterForm from "../common/login";
class Register extends RegisterForm {
  state = { data: { email: "", username: "", password: "" }, error: {} };

  schema = {
    email: joi
      .string()
      .email()
      .required()
      .label("E-mail"),
    username: joi
      .string()
      .required()
      .label("UserName"),
    password: joi
      .string()
      .required()
      .label("Password").min(5)
  };

  doSubmit=()=>{
      console.log("registered")
  }

  render() {
    return (
      <div>
        <h1>Register a new account</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                {this.renderInput("email" ,"E-mail" ,"email")}
                {this.renderInput("username" ,"name")}
                {this.renderInput("password" ,"Password" ,"password")}      
            </div>
            {this.renderSubmitBtn("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
