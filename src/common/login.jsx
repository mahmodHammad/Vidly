// needs :[schema ,error,data:{username="ga",password:'fa'}]

import React, { Component } from "react";
import joi from "joi-browser";
import Input from "../common/Input";

class Login extends Component {
  state = { data: {}, error: {} };
  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  // change the state witch will stores the imput values
  handleChange = ({ currentTarget: input }) => {
    // currentTarget is the html element witch has a ref called name and value
    //copy datas
    const data = { ...this.state.data };
    data[input.name] = input.value;

    const error = { ...this.state.error };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    this.setState({ data, error });
  };

  validate = () => {
    const { data } = this.state;
    let errors = {};

    const { error } = joi.validate(data, this.schema, { abortEarly: false });
    if (error) {
      for (const Item of error.details) {
        errors[Item.path[0]] = Item.message;
      }
      return errors;
    } else return null;
  };

  handleSubmit = e => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ error: error || {} });

    if (error){
      console.log(error)
      return;
    } 
    this.doSubmit();
  };

  renderSubmitBtn = lable => {
    return (
      <button className="btn btn-primary" disabled={this.validate()}>
        {lable}
      </button>
    );
  };
  renderInput = (name, label, type = "text") => {
    const { data, error } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        onChange={this.handleChange}
        error={error[name]}
        label={label}
      />
    );
  };

  //need some implementaions !!!
  renderSelect = (name, options, label) => {
    return (
      <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <select  id={name} className="form-control" name={name} onChange={this.handleChange}>
       <option value=""/>
        {options.map((e)=><option key={e._id} value={e._id}  >{e.name}</option>)}
      </select>
      </React.Fragment>
    );
  };
}

export default Login;
