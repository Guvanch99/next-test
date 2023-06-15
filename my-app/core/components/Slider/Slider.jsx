import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
`;

const SliderNavigation = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const SliderButton = styled.button`
  background-color: #f3f3f3;
  color: #333;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: #3498db;
    color: #fff;
  }
`;

export default function Slider({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <SliderContainer>
            <SlideImage src={images[currentSlide]} alt={`Screenshot ${currentSlide}`} />

            <SliderNavigation>
                <SliderButton onClick={prevSlide}>Предыдущий</SliderButton>
                <SliderButton onClick={nextSlide}>Следующий</SliderButton>
            </SliderNavigation>
        </SliderContainer>
    );
}
