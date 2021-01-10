import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "components/Header";
import Loader from "./Loader/Loader";

const Home = lazy(() => import("../Pages/Home"));
const Detail = lazy(() => import("../Pages/Detail"));
const Movie = lazy(() => import("../Pages/Movie"));
const TV = lazy(() => import("../Pages/TV"));
const Person = lazy(() => import("../Pages/Person"));
const Season = lazy(() => import("../Pages/Season"));
const Search = lazy(() => import("../Pages/Search"));

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
