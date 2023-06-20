import {useEffect, useRef, useState} from "react";
import { getGames } from "../../../core/api/api";


export const useInfiniteFetch=(setData, setIsLoading, params)=>{
  const [page, setPage]=useState(1)

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsLoading(true)
          getGames({page, ...params})
            .then((rest)=>setData(prev=>[...prev, ...rest]))
            .then(()=>{
            setIsLoading(false)
            setPage(prev=>prev+1)
          })

        }
      },
      {
        root: null,
        rootMargin: '20px',
        threshold: 0.3
      }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, page, params]);

  return {
    observerTarget
  }
}







