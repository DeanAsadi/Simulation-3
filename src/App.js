import React, { Component } from "react";

//Components
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Post from "./components/Post/Post";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> Testing React... </header>
        <div>
          <Auth />
          <Dashboard />
          <Form />
          <Nav />
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
