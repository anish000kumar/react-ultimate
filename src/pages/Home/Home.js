import React, { Component } from "react";
import "./home.scss";
import { $modal } from "widgets";

function Data({ text }) {
  return (
    <div>
      <h1>DTA {text}</h1>
    </div>
  );
}

export default class Home extends Component {
  showModal = () => {
    $modal.show(Data, { text: "some text" });
  };
  render() {
    return (
      <div className="home">
        <div className="header">
          <h3>PAYTM</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            facere tenetur, fugit atque ducimus eligendi totam facilis nisi
            praesentium aliquid, dicta odit iste distinctio, sit voluptates
            reiciendis quas! Quas, obcaecati?{" "}
          </p>
          <button onClick={this.showModal}>show popup</button>
        </div>
      </div>
    );
  }
}
