import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Slider from "../../core/components/Slider/Slider";

const GamePageContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GameInfo = styled.section`
  display: flex;
  flex-direction: column;
`;

const GameTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

const GamePoster = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 8px;
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

const GameWebsiteLink = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
  color: blue;
`;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;


const GamePage = ({game, screenshots}) => {
    const {name, background_image, rating, released, description_raw, website} = game;

    return (
        <GamePageContainer>
            <GameInfo>
                <GameTitle>{name}</GameTitle>
                <Link href={website} target="_blank" rel="noopener noreferrer">
                    <GameWebsiteLink>
                        Visit Website
                    </GameWebsiteLink>
                </Link>
                <GamePoster src={background_image} alt={name}/>
                <GameRating>Rating: {rating}</GameRating>
                <GameReleaseDate>Release Date: {released}</GameReleaseDate>
                <GameDescription>
                    <h3>About</h3>
                    {description_raw}
                </GameDescription>
            </GameInfo>
            <section>
                <SliderContainer>
                    {!!screenshots.length && <Slider images={screenshots}/>}
                </SliderContainer>
            </section>
        </GamePageContainer>
    );
};

export default GamePage;