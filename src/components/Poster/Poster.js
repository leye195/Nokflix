import React, { useCallback, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ffffff0a;
  cursor: pointer;
  background-color: ${(props) => (props.imgEmpty ? "#2b2b2b" : "transparent")};
  margin-right: ${(props) => (props.scroll ? "10px" : "")};
  height: 180px;
  border-radius: 5px;
  a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  opacity: ${(props) => (props.loading === 1 ? 0.5 : 1.0)};
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 5px;
`;
const ImageLoading = styled.div`
  @keyframes loaderAni {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  position: absolute;
  display: ${(props) => (props.loading === 1 ? "block" : "none")};
  width: 50px;
  height: 50px;
  top: 33%;
  left: 33%;
  border: 3px solid;
  border-color: white #4e4343a8 #4e4343a8;
  border-radius: 50%;
  animation: loaderAni 1s ease-in-out infinite;
`;
const Title = styled.span`
  margin-bottom: 5px;
  white-space: pre;
  width: 100%;
  opacity: 1;
  overflow: hidden;
`;
const RateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  &:hover {
    opacity: 1;
    background: #3535355c;
  }
`;
const Rate = styled.span`
  font-weight: 700;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  padding: 3px;
  background-color: white;
  color: black;
`;
const Poster = ({ id, title, rate, imgUrl, isMovie, scroll, link, season }) => {
  const [imgLoading, setImgLoading] = useState(1);
  const handleImageLoad = useCallback((e) => {
    setImgLoading(0);
  }, []);
  return (
    <Container imgEmpty={imgUrl === null} scroll={scroll === true}>
      {link ? (
        <Link
          to={
            isMovie
              ? `/movie/${id}`
              : season
              ? `/tv/${id}/season/${season}`
              : `/tv/${id}`
          }
        >
          {imgUrl !== null ? (
            <>
              <ImageContainer loading={imgLoading}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
                  alt={title}
                  onLoad={handleImageLoad}
                />
                <ImageLoading loading={imgLoading} />
              </ImageContainer>
              {title && (
                <RateContainer>
                  <Title>
                    {title.length > 14 ? `${title.substring(0, 14)}...` : title}
                  </Title>
                  {rate && <Rate>{rate}/10</Rate>}
                </RateContainer>
              )}
            </>
          ) : (
            <Title>
              {title.length > 14 ? `${title.substring(0, 14)}...` : title}
            </Title>
          )}
        </Link>
      ) : (
        <>
          <Image src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt={title} />
        </>
      )}
    </Container>
  );
};
Poster.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  rate: PropTypes.number,
};
export default Poster;
