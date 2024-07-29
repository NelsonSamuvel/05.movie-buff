import React from "react";
import SingleWatchedMovie from "./SingleWatchedMovie";

const MoviesWatchedList = ({ watched,onDeleteWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <SingleWatchedMovie movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
};

export default MoviesWatchedList;
