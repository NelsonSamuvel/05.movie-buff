import React, { useEffect, useState } from "react";

import { KEY } from "../../App";

import Stars from "../stars/Stars";
import Loader from "../Loader";

const MovieDetails = ({
  selectedId,
  watched,
  onCloseMovie,
  onHandleWatchMovie,
}) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState("");

  const {
    Title: title,
    Year: year,
    Released: released,
    Runtime: runtime,
    Poster: poster,
    imdbRating,
    Plot: plot,
    Actors: actors,
    Genre: genre,
    Director: director,
  } = movieDetails;

  const foundWatchedMovie = watched.find(
    (watchMovie) => watchMovie.imdbID === selectedId
  );

  const watchedRating = foundWatchedMovie?.userRating;

  function handleAddToWatch() {
    const watchMovie = {
      imdbID: selectedId,
      poster,
      title,
      runtime: Number(runtime.split(" ")[0]),
      imdbRating: Number(imdbRating),
      userRating: Number(rating),
    };
    onHandleWatchMovie(watchMovie);
    onCloseMovie();
  }



  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();

      setMovieDetails(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);


  useEffect(()=>{
    if(!title) return;
    document.title = `Movie | ${title}`

    return ()=>document.title = "usePopcorn";

  },[title])


  useEffect(()=>{


    function handleKeyDown(e){
        if(e.code === "Escape"){
            onCloseMovie();
        }
    }

    document.addEventListener('keydown',handleKeyDown);


    return ()=>{
        document.removeEventListener('keydown',handleKeyDown)
    }

  },[])

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`poster of ${movieDetails.title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!foundWatchedMovie ? (
                <>
                  <Stars maxRate={10} size={24} onSetRating={setRating} />
                  {rating > 0 && (
                    <button className="btn-add" onClick={handleAddToWatch}>
                      + Add to Watchlist
                    </button>
                  )}
                </>
              ) : (
                <p>Already added to the watch list with the rating of {watchedRating} <span>⭐</span></p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Actors : {actors}</p>
            <p>Director : {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
