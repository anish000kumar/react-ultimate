import React, { Component } from "react";
import Modal from "./widgets/Modal/Modal";
import AppRouter from "routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
        <Modal />
      </div>
    );
  }
}

export default App;
