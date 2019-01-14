import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRouter from "./auth";
import GuestRouter from "./guest";

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <AuthRouter />
          <GuestRouter />
        </div>
      </Router>
    );
  }
}
