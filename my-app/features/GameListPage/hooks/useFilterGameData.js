import {useCallback, useEffect, useState} from "react";
import {getGames} from "../../../core/api/api";

export function useFilterGameData(setGameData, setIsLoading){
  const [params, setParams]=useState({
    platform:'',
    sort:'',
    game:''
  })

  useEffect(()=>{
    setIsLoading(true)
    getGames(params).then((res)=>{
      setGameData(res)
    })
    setIsLoading(false)
  },[params])


  return {
    handleChangeFilter:useCallback((name, value)=>{
      setParams(prevParams=>({
        ...prevParams, [name]:value
      }))
    },[])
  }

}
