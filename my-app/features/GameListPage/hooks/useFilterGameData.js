import {useCallback, useEffect, useState} from "react";
import {getGames} from "../../../core/api/api";

export function useFilterGameData(setGameData, setIsLoading){
  const [params, setParams]=useState({
    platform:'',
    ordering:'',
    search:''
  })

  useEffect(()=>{
    setIsLoading(true)
    getGames(params).then((res)=>{
      setGameData(res)
    })
    setIsLoading(false)
  },[params.search, params.ordering, params.platform])


  return {
    handleChangeFilter:useCallback(({target: {value, name}})=>{
      setParams(prevParams=>({
        ...prevParams, [name]:value
      }))
    },[]),
    params
  }

}
