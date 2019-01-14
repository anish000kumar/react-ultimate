import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";

export default class GuestRouter extends Component {
  render() {
    return [
      <Route path="/" exact component={Home} />,
      <Route path="/login" exact component={Login} />
    ];
  }
}
