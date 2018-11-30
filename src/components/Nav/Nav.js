import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/newpost">
        <button>New post</button>
      </Link>
      <Link to="auth">
        <button>Logout</button>
      </Link>
    </div>
  );
}
export default Nav;
