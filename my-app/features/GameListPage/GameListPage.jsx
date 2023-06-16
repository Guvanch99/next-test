import React from 'react';
import styled from 'styled-components';
import GameCard from "../../core/components/GameCard/GameCard";
import {useInfiniteFetch} from "./hooks/useInfiniteFetch";

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

const GameList = ({data}) => {
    const {gameData} = useInfiniteFetch(data)

    return (
        <>
            <Header>Game List</Header>
            <GameListWrapper>
                {gameData.map((game) => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </GameListWrapper>
        </>
    );
};

export default GameList;
