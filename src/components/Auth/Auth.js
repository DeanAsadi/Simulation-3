import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      fireRedirect: false
    };
  }

  createUser = () => {
    axios
      .post("/api/user/register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(() => {
        this.setState(() => ({ fireRedirect: true }));
      })
      .catch(err => console.log("User NOT added"));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, password, fireRedirect } = this.state;
    return (
      <div>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          placeholder="username"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="password"
        />
        <br />
        <div>
          {fireRedirect && <Redirect to={"/"} />}
          <button>Login</button>
          <button onClick={this.createUser}> Register </button>
        </div>
      </div>
    );
  }
}
export default Auth;
