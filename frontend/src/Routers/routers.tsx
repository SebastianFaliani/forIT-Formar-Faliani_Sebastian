import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Tasks from "../components/Tasks/Tasks";
import Home from "../components/Home/Home";

const Routers = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tasks" exact component={Tasks} />
      </Switch>
    </Layout>
  </Router>
);

export default Routers;
