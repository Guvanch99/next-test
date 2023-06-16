import {useEffect, useState} from "react";
import { getGames } from "../../../core/api/api";

function useInfiniteScroll(isLoading){
  const [page, setPage]=useState(0)
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (!isLoading) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return page
}


export const useInfiniteFetch=(initialState)=>{
  const [gameData, setGameData]=useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const page= useInfiniteScroll(isLoading)

  useEffect(()=>{
    if(!page){
      return
    }
    setIsLoading(true);
    getGames(page).then((res)=>setGameData(prev=>[...res, ...prev]))
    setIsLoading(false);

  },[page])

  return{
    gameData
  }
}
