import React, { Component } from "react";

const NavBar = ({ totalNumber }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="javascript:;">
        Navbar <span className="badge badge-primary">{totalNumber}</span>
      </a>
    </nav>
  );
};

export default NavBar;
