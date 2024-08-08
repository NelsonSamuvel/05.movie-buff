import { useEffect,useState } from "react";


import { KEY } from "../App";

export function useMovies(query,callback){


    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        async function getData() {
          try {  
            setIsLoading(true);
            setError("");
            const res = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,{
                signal : controller.signal,
              }
            );
            if (!res.ok)
              throw new Error("Something went wrong with fetching movies");
            const data = await res.json();
            if (data.Response === "False") {
              console.log(data);
              throw new Error("Movie Not Found");
            }
            setMovies(data.Search);
            setError("");
          } catch (err) {
            if(err.name !== "AbortError"){
    
              setError(err.message);
            }
          } finally {
            setIsLoading(false);
          }
        }
        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }

        callback?.();
        getData();
    
    
        return ()=>{
          controller.abort();
        }
    
      }, [query]);

      return {movies,isLoading,error};
}