import React,{useState} from 'react'
import MoviesSummary from './MoviesSummary';
import MoviesWatchedList from './MoviesWatchedList';


  
export const average = (arr) =>
    arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);


const MoviesWatchedBox = () => {

    const [isOpen2, setIsOpen2] = useState(true);


    

  return (
    <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          {isOpen2 && (
            <>
           
            </>
          )}
        </div>
  )
}

export default MoviesWatchedBox