import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
      <nav className="top"></nav>
      <nav className="bottom">
        <Link to="/">
          <button>Add New Person</button>
        </Link>
        <Link to="/retriveData">
          <button>Retrive Information</button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
