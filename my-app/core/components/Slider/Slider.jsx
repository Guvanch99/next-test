import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SlideImage = styled.img`
  position: relative;
  width: 100%;
  max-height: 400px;
  border-radius: 8px;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ThumbnailImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin: 0 5px;
  border-radius: 8px;
  cursor: pointer;
  opacity: ${(props) => (props.isActive ? '1' : '0.5')};
  transition: opacity 0.3s ease;
`;

const GameSlider = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images[0].image);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleImageClick = (image, index) => {
        setActiveImage(image);
        setActiveIndex(index);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            let nextIndex = activeIndex + 1;
            if (nextIndex >= images.length) {
                nextIndex = 0;
            }
            setActiveImage(images[nextIndex].image);
            setActiveIndex(nextIndex);
        }, 3000);

        return () => {
            clearInterval(timer);
        };
    }, [activeIndex, images]);

    return (
        <SliderContainer>
            <SlideImage src={activeImage} alt="Active Slide" isActive={true} />
            <ThumbnailContainer>
                {images.map((screenshot, index) => (
                    <ThumbnailImage
                        key={index}
                        src={screenshot.image}
                        alt={`Slide ${index}`}
                        isActive={activeIndex === index}
                        onClick={() => handleImageClick(screenshot.image, index)}
                    />
                ))}
            </ThumbnailContainer>
        </SliderContainer>
    );
};

export default GameSlider;
