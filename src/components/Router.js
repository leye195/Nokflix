import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "components/Header";
import Loader from "./Loader/Loader";
//import Home from "../Routes/Home";
//import Search from "../Routes/Search";
//import TV from "../Routes/TV";
//import Movie from "../Routes/Movie";
//import Detail from "../Routes/Detail";
//import Person from "../Routes/Person";
//import Season from "../Routes/Season";

const Home = lazy(() => import("../Routes/Home"));
const Detail = lazy(() => import("../Routes/Detail"));
const Movie = lazy(() => import("../Routes/Movie"));
const TV = lazy(() => import("../Routes/TV"));
const Person = lazy(() => import("../Routes/Person"));
const Season = lazy(() => import("../Routes/Season"));
const Search = lazy(() => import("../Routes/Search"));

export default () => (
  <Router>
    <Header />
    <Suspense fallback={<Loader fixed={true} />}>
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
    </Suspense>
  </Router>
);
