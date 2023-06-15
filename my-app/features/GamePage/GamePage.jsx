import React from 'react';
import styled from 'styled-components';
import Slider from "../../core/components/Slider/Slider";

const GamePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const GameTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const GamePoster = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
`;

const GameRating = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
`;

const GameReleaseDate = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;

const GameDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const GameWebsiteLink = styled.a`
  font-size: 16px;
  margin-bottom: 10px;
  color: blue;
`;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;


const GamePage = ({ game, screenshots }) => {
    const { name, background_image, rating, released, description_raw, website } = game;
    console.log(screenshots)

    return (
        <GamePageContainer>
            <GameTitle>{name}</GameTitle>
            <GameWebsiteLink href={website} target="_blank" rel="noopener noreferrer">
                Visit Website
            </GameWebsiteLink>
            <GamePoster src={background_image} alt={name} />
            <GameRating>Rating: {rating}</GameRating>
            <GameReleaseDate>Release Date: {released}</GameReleaseDate>
            <GameDescription>{description_raw}</GameDescription>
            <SliderContainer>
                {!!screenshots.length && <Slider images={screenshots} />}
            </SliderContainer>
        </GamePageContainer>
    );
};

export default GamePage;