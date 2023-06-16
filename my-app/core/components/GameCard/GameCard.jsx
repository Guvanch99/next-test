import React from 'react';
import styled from 'styled-components';
import Link from "next/link";

const GameCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
  background-color: #4f4d4d;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const GameTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

  &:hover {
    color: #0000FFFF;
  }
`;

const GamePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const GameRating = styled.div`
  font-size: 16px;
  margin-top: 10px;
  padding: 5px;
  border-radius: 4px;
`;

const GameReleaseDate = styled.div`
  font-size: 14px;
  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;
`;

const GameCard = ({game}) => {
    const {id, name, released, background_image, rating} = game;

    return (
        <GameCardContainer>
            <GamePoster src={background_image} alt={name}/>
            <GameContent>
                <GameTitle>
                    <Link href={`/game/${id}`}>{name}</Link>
                </GameTitle>
                <GameRating>Rating: {rating}</GameRating>
                <GameReleaseDate>Release Date: {released}</GameReleaseDate>
            </GameContent>
        </GameCardContainer>);
};

export default GameCard;

