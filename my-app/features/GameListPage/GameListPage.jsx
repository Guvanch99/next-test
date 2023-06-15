import React from 'react';
import styled from 'styled-components';
import GameCard from "../../core/components/GameCard/GameCard";

const GameListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const GameList = ({ data }) => {
    return (
        <GameListWrapper>
            {data.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}
        </GameListWrapper>
    );
};

export default GameList;
