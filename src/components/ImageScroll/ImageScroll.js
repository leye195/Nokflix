import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Poster from "../Poster";
import { v4 } from "uuid";
const Container = styled.div`
  top: 50px;
  left: 0;
  width: 100%;
  height: 400px;
  position: absolute;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const Image = styled.div`
  @keyframes imgAni {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  outline: none;
  width: 80vw;
  height: 100%;
  margin: 0 auto;
  background-image: linear-gradient(
      to right,
      rgb(20, 24, 28),
      transparent,
      transparent,
      transparent,
      rgb(20, 24, 28)
    ),
    linear-gradient(transparent, transparent, transparent, rgb(20, 24, 28)),
    ${(props) =>
      props.imgUrl
        ? `url(https://image.tmdb.org/t/p/original${props.imgUrl})`
        : ""};

  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  display: ${(props) => (props.current ? "flex" : "none")};
  flex-direction: column;
  animation: imgAni 1s ease-out;
  align-items: center;
  justify-content: center;
  & img {
    width: auto;
  }
`;
const Title = styled.p`
  margin-top: 10px;
  font-weight: bold;
  white-space: pre;
  text-shadow: 0px 1px 12px black;
`;
const ScrollBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ScrollBar = styled.div`
  background-color: white;
  transform: ${(props) => (props.current ? "scale(1.2)" : "scale(1)")};
  width: 20px;
  height: 3px;
  margin: 7px;
  cursor: pointer;
  opacity: ${(props) => (props.current ? "1.0" : "0.4")};
  transition: all 0.5s ease-out;
  border-radius: 5px;
  &:hover {
    background-color: white;
    transition: opacity 0.5s ease-out;
    opacity: 0.6;
  }
`;
const ImageScroll = ({ movieTrend }) => {
  const [current, setCurrent] = useState(0);
  const timer = useRef(null);
  const nextImage = useCallback(() => {
    const nextIdx = (current + 1) % 5;
    setCurrent(nextIdx);
  }, [current]);
  const onClickCurrent = useCallback(
    (idx) => (e) => {
      setCurrent(idx);
    },
    []
  );
  useEffect(() => {
    timer.current = setInterval(nextImage, 3500);
    return () => {
      clearInterval(timer.current);
    };
  }, [nextImage]);
  //console.log(movieTrend);
  return (
    <Container>
      <ImageContainer>
        {movieTrend.slice(0, 5).map((movie, idx) => (
          <Image
            key={v4()}
            imgUrl={movie.backdrop_path}
            current={idx === current}
          >
            <Poster
              id={movie.id}
              title={movie.title}
              rate={movie.vote_average}
              imgUrl={movie.poster_path}
              link={true}
              isMovie={true}
            />
            <Title>{movie.title}</Title>
          </Image>
        ))}
      </ImageContainer>
      <ScrollBarContainer>
        {movieTrend.slice(0, 5).map((movie, idx) => (
          <ScrollBar
            key={v4()}
            current={idx === current}
            onClick={onClickCurrent(idx)}
          />
        ))}
      </ScrollBarContainer>
    </Container>
  );
};
ImageScroll.propsType = {
  movieTrend: PropTypes.array,
};
export default ImageScroll;
