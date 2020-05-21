import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "components/Header";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import TV from "../Routes/TV";
import Movie from "../Routes/Movie";
import Detail from "../Routes/Detail";
import Person from "../Routes/Person";
import Season from "../Routes/Season";
export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/tv"} exact component={TV} />
      <Route path={"/movie"} exact component={Movie} />
      <Route path={"/search"} component={Search} />
      <Route path={"/movie/:id"} component={Detail} />
      <Route path={"/tv/:id"} exact component={Detail} />
      <Route path={"/tv/:id/season/:season"} component={Season} />
      <Route path={"/person/:id"} component={Person} />
      <Redirect from={"*"} to="/" />
    </Switch>
  </Router>
);
