import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div className="options">
        <div className="inside">
          <h1>
            <Link to="/login">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/signup">Signup</Link>
          </h1>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Home;
