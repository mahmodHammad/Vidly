import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/NotFound";
import MovieForm from "./components/MovieForm";
import NavBar from "./components/NavBar";
import Loginform from "./components/LogonForm";
import RegisterForm from "./components/RegisterForm";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="container">
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/NotFound" component={NotFound} />
          <Route path="/movieform" component={MovieForm} />
          <Route path="/Login" component={Loginform} />
          <Route path="/Register" component={RegisterForm} />
          <Route path="/AddMovie" component={AddMovie}/>

          <Redirect exact from="/" to="/movies" />
          <Redirect to="/NotFound" />
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
