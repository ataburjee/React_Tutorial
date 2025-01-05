import React, { Component } from "react";

export default class Loading extends Component {
  static defaultProps = {
    height: 0,
    width: 0,
  };
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "70vh" }}
      >
        <img
          src="https://media.tenor.com/GpecqxTO34AAAAAC/loader.gif"
          alt="loading..."
          style={{
            width: this.props.width,
            height: this.props.height,
          }}
        />
      </div>
    );
  }
}
