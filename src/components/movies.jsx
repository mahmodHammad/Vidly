import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "../common/Pagination";
import paginate from "../utils/paginate";
import ListGroup from "../common/ListGroup";
import MoviesTable from "./MoviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";
export class Movies extends Component {
  state = {
    Movies: [],
    genres: [],
    selectedGenre: 0,
    pageSize: 4,
    currentPage: 1,
    sortcoulumn: { path: "title", order: "asc" },
    search: ""
  };
  componentDidMount() {
    const genres = [{ name: "All genres", _id: "" }, ...getGenres()];
    this.setState({
      Movies: getMovies(),
      genres,
      selectedGenre: genres[0]
    });
  }

  handleDelete = movie => {
    this.setState({
      Movies: this.state.Movies.filter(e => e._id !== movie._id)
    });
  };
  handleFilterGenres = genres => {
    this.setState({ selectedGenre: genres, currentPage: 1, search: "" });
  };

  handleLike = movie => {
    const Movies = [...this.state.Movies];
    const index = Movies.indexOf(movie);
    Movies[index] = { ...Movies[index] };
    Movies[index].liked = !Movies[index].liked;
    this.setState({ Movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortcoulumn => {
    this.setState({ sortcoulumn });
  };

  HandleInputChange = ({ currentTarget: input }) => {
    this.setState({ search: input.value, selectedGenre: 0, currentPage: 1 });
  };

  getPageData = () => {
    const {
      search,
      pageSize,
      currentPage,
      selectedGenre,
      sortcoulumn
    } = this.state;
    //search on movies---------------
    let Movies = this.state.Movies;
    if (search) {
      const result = this.state.Movies.filter(e => e.title.includes(search));
      Movies = result;
    }
    //-------------------------------

    const filteredGenre =
      selectedGenre && selectedGenre._id
        ? Movies.filter(e => e.genre._id === selectedGenre._id)
        : Movies;

    const ordered = _.orderBy(
      filteredGenre,
      [sortcoulumn.path],
      [sortcoulumn.order]
    );

    const pagmovie = paginate(ordered, currentPage, pageSize);

    return { data: pagmovie, totalcount: ordered.length };
  };

  render() {
    const { Movies, pageSize, currentPage, genres, sortcoulumn } = this.state;
    const { totalcount, data: pagmovie } = this.getPageData();
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={genres}
            filterGenre={this.handleFilterGenres}
            selected={this.state.selectedGenre}
          ></ListGroup>
        </div>
        {Movies.length !== 0 ? (
          <div className="col">
            <Link className="btn btn-danger mb-4 mt-4" to="/AddMovie">
              addMovie
            </Link>

            <input
              value={this.state.search}
              onChange={this.HandleInputChange}
              className="form-control"
              placeholder="search"
            ></input>
            <p>{`showing ${totalcount}movies in the database`}</p>

            <MoviesTable
              sortcoulumn={sortcoulumn}
              onSort={this.handleSort}
              pagmovie={pagmovie}
              onlike={this.handleLike}
              onDelete={this.handleDelete}
            ></MoviesTable>

            <Pagination
              itemCount={totalcount}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            ></Pagination>
          </div>
        ) : (
          <p>There is no movies in the database</p>
        )}
      </div>
    );
  }
}
export default Movies;
