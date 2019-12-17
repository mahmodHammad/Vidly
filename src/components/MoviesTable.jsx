import React, { Component } from "react";
import Like from "../common/like";
import Table from "../common/Table";
import { Link } from 'react-router-dom';
export class MoviesTable extends Component {
  columns = [
    { title: "Title", lable: "title",content:movie=>(
      // ******************************************************
      <Link to={`/movies/${movie._id}`}>{movie.title}</Link>    
      //******************************************************* 
    ) },
    { title: "Genre", lable: "genre.name" },
    { title: "Stock", lable: "numberInStock" },
    { title: "Rate", lable: "dailyRentalRate" },
    {
      key: "like",
      content: movie => (
        <Like
          onClick={() => this.props.onlike(movie)}
          liked={movie.liked}
        ></Like>
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { pagmovie, onlike, onDelete, onSort, sortcoulumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={pagmovie}
        onSort={onSort}
        sortcoulumn={sortcoulumn}
        onlike={onlike}
        onDelete={onDelete}
      />
    );
  }
}

export default MoviesTable;
