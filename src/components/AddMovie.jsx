import React from "react";
import Login from "./../common/login";
import joi from "joi-browser";
import{saveMovie} from"../services/fakeMovieService"
import { genres } from "../services/fakeGenreService";
class AddMovie extends Login {
  state = { data: { title: "",genre: "", numberInStock: 0, dailyRentalRate: 0 }, error: "" };
  componentDidMount(){
    const {data}=this.props
    if(data){
      this.setState({data})
      console.log(this.state.data)
    }
  }
  schema = {
    title: joi.string().required(),
    genre: joi.string().required(),
    _id:joi.string(),
    numberInStock: joi
      .number()
      .required()
      .min(0),
      dailyRentalRate: joi
      .number()
      .integer()
      .min(0)
      .max(10)
      .required()
  };
  doSubmit=()=>{
    saveMovie(this.state.data)

    console.log(this,this.props)
    this.props.history.replace("/movies")
  }
  render() {
    return (
      <div>
        <h1>Movie Form</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {this.renderInput("title", "Title")}
            {this.renderInput("numberInStock", "Number In Stock", "number")}
            {this.renderSelect("genre", genres, "Genre")}
            {this.renderInput("dailyRentalRate", "Rate", "number")}
          </div>
          {this.renderSubmitBtn("Add")}
        </form>
      </div>
    );
  }
}

export default AddMovie;
