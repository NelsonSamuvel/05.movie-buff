import React, { useState } from "react";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import NumResult from "./NumResult";

const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
     {children}
    </nav>
  );
};

export default NavBar;
