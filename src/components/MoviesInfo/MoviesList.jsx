import React from "react";
import SingleMovie from "./SingleMovie";

const MoviesList = ({ movies,onSelectMovie,query }) => {
  return (
    <ul className={`list list-movies ${query.length <3 ? "default-box" : ""}`}>
      {movies?.map((movie) => (
        <SingleMovie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MoviesList;
