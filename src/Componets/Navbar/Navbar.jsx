import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="pb-5">
      <nav
        className="top  text-center text-light bg-primary py-3"
        
      >
        Directory Application
      </nav>
      <nav className="bottom">
        <Link to="/">
          <button className="bg-primary border border-0 py-2 px-5 m-2 text-light">
            Add New Person
          </button>
        </Link>
        <Link to="/retriveData">
          <button className="bg-primary border border-0 py-2 px-5 m-2 text-light">
            Retrive Information
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
