import React, {useState} from 'react';
import styled from 'styled-components';
import GameCard from "../../core/components/GameCard/GameCard";
import {useInfiniteFetch} from "./hooks/useInfiniteFetch";
import {useFilterGameData} from "./hooks/useFilterGameData";
import Loader from "../../core/components/Loader/Loader";

const GameListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const Header = styled.h1`
  text-align: center;
  padding: 20px;
`;


function useGameList(initialGameData){
  const [isLoading,setIsLoading]=useState(false)
  const [gameData, setGameData]=useState(initialGameData)
  const { observerTarget} = useInfiniteFetch(setGameData, setIsLoading)
  const { handleChangeFilter } = useFilterGameData(setGameData, setIsLoading)

  return{
    isLoading,
    gameData,
    observerTarget,
    handleChangeFilter
  }
}

const GameList = ({ data:initialGameData }) => {
  const {isLoading, gameData, handleChangeFilter, observerTarget} = useGameList(initialGameData)

    return (
        <>
            <Header>Game List</Header>
            <GameListWrapper>
              {gameData.map((game) => (<GameCard key={game.id} game={game}/>))}
              { isLoading
                ? <Loader/>
                : <div ref={observerTarget} />
              }
            </GameListWrapper>
        </>
    );
};

export default GameList;
