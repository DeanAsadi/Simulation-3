import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Auth from "./components/Auth/Auth";
import Post from "./components/Post/Post";
import Form from "./components/Form/Form";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/auth" component={Auth} />
    <Route path="/post/:postid" component={Post} />
    <Route path="/new" component={Form} />
  </Switch>
);
