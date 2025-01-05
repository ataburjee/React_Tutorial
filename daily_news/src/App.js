import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = {
    progress: 10,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  headingText = (text) => {
    return "Top " + text + " Headlines...";
  };

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} />} />
          <Route path="/about" element={<About key="about" />} />
          <Route
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                category="science"
                heading={this.headingText("Science")}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                category="business"
                heading={this.headingText("Business")}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                category="entertainment"
                heading={this.headingText("Entertainment")}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                category="health"
                heading={this.headingText("Health")}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                category="sports"
                heading={this.headingText("Sports")}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                category="technology"
                heading={this.headingText("Technology")}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
