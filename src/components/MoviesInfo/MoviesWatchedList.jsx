import React from "react";
import SingleWatchedMovie from "./SingleWatchedMovie";

const MoviesWatchedList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <SingleWatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default MoviesWatchedList;
