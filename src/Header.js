import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="right menu">
        <Link to="/" className="item">
          Streamy
        </Link>
        <div className="right menu">
          <Link to="/">All Streams</Link>
        </div>
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  );
};
export default Header;
