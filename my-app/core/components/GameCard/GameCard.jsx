import React from 'react';
import styled from 'styled-components';

const GameCardWrapper = styled.div`
  background-color: #222;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const GameImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const GameName = styled.h3`
  margin-top: 10px;
  font-size: 18px;
`;

const GameReleased = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;

const GameRating = styled.p`
  font-size: 14px;
  opacity: 0.8;
`;

const GameCard = ({ game }) => {
/*
    const { name, released, background_image, rating } = game;
*/

    console.log(game?.name, game?.released)
    return (
        <div>Game</div>
/*        <GameCardWrapper>
            <GameImage src={background_image} alt={name} />
            <div>
                <GameName>{name}</GameName>
                <GameReleased>Release Date: {released}</GameReleased>
            </div>
            <GameRating> Rating: {rating} </GameRating>
        </GameCardWrapper>*/
    );
};

export default GameCard;
