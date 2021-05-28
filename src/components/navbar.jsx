import React from "react";

const NavBar = ({ totalCounters }) => {

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href = "localhost:3000">
        Navbar{" "}
        <span className="badge bg-pill bg-dark bg-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
