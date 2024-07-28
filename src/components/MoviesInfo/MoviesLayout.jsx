import React from "react";
import MoviesListBox from "./Box";
import MoviesWatchedBox from "./MoviesWatchedBox";

const MoviesLayout = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default MoviesLayout;
