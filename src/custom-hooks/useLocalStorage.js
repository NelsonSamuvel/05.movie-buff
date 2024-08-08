import { useState,useEffect } from "react";

export function useLocalStorage(initialState,key){
    const [value, setValue] = useState(()=>{

        const watchedArr = JSON.parse(localStorage.getItem(key));
        return watchedArr ? watchedArr : initialState;
      });


      useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value));
      },[value,key])
    
      return [value,setValue];

}