import React, { Component } from "react";

//Components---------------------------
import routes from "./routes";
import Nav from "./components/Nav/Nav";
import "./App.css";
//-------------------------------------

import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.location.pathname !== "/auth" && <Nav />}
        </header>
        <div>{routes}</div>
      </div>
    );
  }
}

export default withRouter(App);
