import React from "react";
import { Link } from "react-router-dom";

function LoginPage({}) {
  return (
    <div className="container">
      <h1 className="heading">Welcome User</h1>

      <Link to="/">signout</Link>
    </div>
  );
}

export default LoginPage;
