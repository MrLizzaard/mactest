import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <Link to="/">main</Link>
      <Link to="/about">about</Link>
      <Link to="/board">board</Link>
    </div>
  );
}

export default Header;
