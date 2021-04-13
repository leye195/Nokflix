import React from "react";
import PropsTypes from "prop-types";
import styled from "styled-components";
import moment from "moment";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import Loader from "components/Loader";
import Poster from "components/Poster";
import BackgroundImage from "components/BackgroundImage";
import Credit from "components/Credit";
import Section from "components/Section";
import Message from "components/Message";
import Trailer from "components/Trailer";
import Overlay from "components/Overlay";
import Video from "components/Video";
import Company from "components/Company";
import LineChart from "../../components/LineChart/LineChart";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 300px;
  z-index: 1;
  min-height: 550px;
`;
const TopSection = styled.section`
  @media (max-width: 767px) and (min-width: 320px) {
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  @media (min-width: 768px) {
    width: 80vw;
    display: flex;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  div {
    height: auto;
  }
  img {
    width: 150px;
    height: auto;
    border-radius: 20px;
    cursor: default;
  }
`;
const SubSection = styled.section`
  margin: 0 auto;
  width: 70vw;
`;
const TextContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 20px;
  }
  @media (max-width: 767px) and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.p`
  color: white;
  z-index: 1;
  font-size: 2rem;
  text-shadow: 1px 1px 20px #000000;
  margin-bottom: 10px;
`;
const ImdbLink = styled.a`
  z-index: 100;
`;
const Image = styled.img`
  width: 35px !important;
  cursor: pointer;
`;
const SubInfoContainer = styled.div`
  @media (max-width: 767px) and (min-width: 320px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  display: flex;
  z-index: 1;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;
const Span = styled.span`
  margin: 2px;
  z-index: 1;
  font-weight: 300;
`;
const TagLine = styled.p`
  @media (max-width: 767px) and (min-width: 320px) {
    text-align: center;
  }
  z-index: 1;
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 1px 1px 12px #848484;
`;
const OverView = styled.p`
  font-size: 1rem;
  word-break: break-all;
  font-weight: 200;
  width: 80%;
  line-height: 1.5;
`;
const Ul = styled.ul`
  display: flex;
  z-index: 1;
  height: 40px;
  border-bottom: 1px solid white;

  @media (max-width: 425px) {
    overflow-x: scroll;
  }
`;
const Li = styled.li`
  padding: 10px;
  cursor: pointer;
  border-bottom: ${(props) => (props.selected ? "2px solid white" : "")};
  &:hover {
    border-bottom: 2px solid rgba(255, 255, 255, 0.9);
    transition: all 0.1s ease-in-out;
  }
`;
const CreditContainer = styled.section`
  display: flex;
  flex-direction: ${(props) => props?.direction};
  flex-flow: ${(props) => (props.direction === "row" ? "row wrap" : "")};
  justify-content: ${(props) => props.justify};
  height: auto;
  margin-top: 10px;
  min-height: 200px;
  section {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
    div {
      grid-template-columns: repeat(auto-fill, minmax(150px, 400px));
    }
  }
  a {
    display: flex;
    align-items: center;
    height: fit-content;
  }
`;
const TrailerContainer = styled.section`
  display: flex;
  overflow: ${props=>props.count>2?'scroll':'hidden'} hidden;
  margin: 20px 0;
  min-height: 200px;
`;
const LefeSide = styled.div`
  display: flex;
  flex-direction: column;
`;
const FontContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  svg {
    margin: 5px;
    &.star {
      color: yellow;
    }
    &.heart {
      color: pink;
    }
  }
`;

const PosterContainer = styled.section`
  display: inline-flex;
  align-items: center;
  overflow: ${props=>props.count>5?'scroll':'hidden'} hidden;
  width: 70vw;
  min-height: 200px;
  img,
  a {
    width: 120px;
  }
  & div {
    margin: 10px;
    div {
      margin: 0px;
    }
  }
`;

const DetailPresenter = ({
  type,
  info,
  loading,
  crew,
  cast,
  recommendations,
  selected,
  handleSelected,
  handleToggle,
  toggleOverlay,
  videoKey,
  seriesData,
}) => {
  //console.log(type, info, crew, cast);
  return loading ? (
    <>
      <Helmet>
        <title>Loading | Nokflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {type === "movie"
            ? `${info?.title} | Nokflix`
            : `${info?.original_name} | Nokflix`}
        </title>
      </Helmet>
      <BackgroundImage imgUrl={info && info.backdrop_path} />
      <TopSection>
        <LefeSide>
          <Poster
            id={info && info.id}
            title={type === "movie" ? info?.title : info?.original_name}
            imgUrl={info?.poster_path}
            link={false}
          />
          <FontContainer>
            {info && info.popularity && (
              <FontContainer>
                <FontAwesomeIcon icon={faHeart} className={"heart"} />
                {parseInt(info.popularity, 10)}
              </FontContainer>
            )}
            {info && info.vote_average && (
              <FontContainer>
                <FontAwesomeIcon icon={faStar} className={"star"} />
                {`${info.vote_average}/10`}
              </FontContainer>
            )}
          </FontContainer>
        </LefeSide>
        <TextContainer>
          <TitleContainer>
            <Title>
              {type === "movie" ? info?.title : info?.original_name}
            </Title>
            <ImdbLink
              href={`https://www.imdb.com/title/${info?.imdb_id}`}
              target="_blank"
            >
              <Image src="https://m.media-amazon.com/images/G/01/imdb/images/plugins/imdb_46x22-2264473254._CB468224391_.png" />
            </ImdbLink>
          </TitleContainer>
          <SubInfoContainer>
            <Span>{moment(info.release_date).format("YYYY/MM/DD")}</Span>
            {info?.genres?.length > 0 && <Span>•</Span>}
            {info?.genres?.length > 0 &&
              info?.genres?.map((genre, idx) => (
                <Span key={v4()}>
                  {genre.name}
                  {idx < info.genres.length - 1 && ", "}
                </Span>
              ))}
            {(info.production_countries?.length > 0 ||
              info?.origin_country?.length > 0) && <Span>•</Span>}
            {info && info.production_countries?.length > 0
              ? info?.production_countries?.map((country, idx) => (
                  <Span key={v4()}>
                    {country.iso_3166_1}
                    {idx < info?.production_countries.length - 1 && ","}
                  </Span>
                ))
              : info.origin_country
                  ?.slice(0, 2)
                  ?.map((country) => <Span key={v4()}>{country}</Span>)}
            <Span>
              •
              {info && info.runtime
                ? info?.runtime
                : info?.episode_run_time?.length > 0
                ? `${info?.episode_run_time} min`
                : ``}
            </Span>
          </SubInfoContainer>
          <TagLine>
            " {info && info.tagline ? info.tagline : info.name} "
          </TagLine>
          <OverView>{info?.overview}</OverView>
        </TextContainer>
      </TopSection>
      <LineChart seriesData={seriesData} />
      <SubSection>
        <Ul>
          <Li onClick={handleSelected(0)} selected={selected === 0}>
            Cast
          </Li>
          <Li onClick={handleSelected(1)} selected={selected === 1}>
            Crew
          </Li>
          <Li onClick={handleSelected(4)} selected={selected === 4}>
            Company
          </Li>
          <Li onClick={handleSelected(2)} selected={selected === 2}>
            Trailer
          </Li>
          {type !== "movie" && (
            <Li onClick={handleSelected(5)} selected={selected === 5}>
              Seasons
            </Li>
          )}
          <Li onClick={handleSelected(3)} selected={selected === 3}>
            Recommendations
          </Li>
        </Ul>
        {selected === 0 && (
          <CreditContainer direction={"row"} justify={"flex-start"}>
            {cast?.slice(0, 10)?.map((c) => (
              <Link to={`/person/${c?.id}`} key={v4()}>
                <Credit
                  imgUrl={c?.profile_path}
                  name={c?.name}
                  role={c?.character}
                />
              </Link>
            ))}
          </CreditContainer>
        )}
        {selected === 1 && (
          <CreditContainer direction={"column"} justify={"flex-start"}>
            <Section title="Directing">
              {crew?.filter((c) => c?.department === "Directing").length > 0 ? (
                crew
                  ?.filter((c) => c?.department === "Directing")
                  ?.map((c) => (
                    <Link to={`/person/${c?.id}`} key={v4()}>
                      <Credit
                        imgUrl={c?.profile_path}
                        name={c?.name}
                        role={c?.job}
                      />
                    </Link>
                  ))
              ) : (
                <Message msg={`No Information`} width={"70vw"} />
              )}
            </Section>
            {crew?.filter((c) => c?.department === "Production").length > 0 && (
              <Section title="Production">
                {crew
                  ?.filter((c) => c?.department === "Production")
                  ?.map((c) => (
                    <Link to={`/person/${c?.id}`} key={v4()}>
                      <Credit
                        imgUrl={c?.profile_path}
                        name={c?.name}
                        role={c?.job}
                      />
                    </Link>
                  ))}
              </Section>
            )}
            {crew?.filter((c) => c?.department === "Writing").length > 0 && (
              <Section title="Writing">
                {crew
                  ?.filter((c) => c?.department === "Writing")
                  ?.map((c) => (
                    <Link to={`/person/${c?.id}`} key={v4()}>
                      <Credit
                        id={c?.id}
                        imgUrl={c?.profile_path}
                        name={c?.name}
                        role={c?.job}
                      />
                    </Link>
                  ))}
              </Section>
            )}
          </CreditContainer>
        )}
        {selected === 2 && (
          <TrailerContainer count={info?.videos?.results.length}>
            {info?.videos?.results?.slice(0, 4)?.map((video) => (
              <Trailer
                key={v4()}
                url={video.key}
                handleToggle={handleToggle(video.key)}
              />
            ))}
          </TrailerContainer>
        )}
        {selected === 3 && (
          <PosterContainer count={recommendations.length}>
            {recommendations?.map((item) => (
              <Poster
                key={v4()}
                id={item?.id}
                title={type === "movie" ? item?.title : item?.original_name}
                rate={item?.vote_average}
                imgUrl={item?.poster_path}
                scroll={false}
                isMovie={type === "movie" ? true : false}
                link={true}
              />
            ))}
          </PosterContainer>
        )}
        {selected === 4 && (
          <CreditContainer direction={"row"} justify={"flex-start"}>
            {info?.production_companies.length > 0 &&
              info?.production_companies?.map((company) => (
                <Company
                  key={v4()}
                  name={company.name}
                  imgUrl={company.logo_path}
                />
              ))}
          </CreditContainer>
        )}
        {selected === 5 && type !== "movie" && (
          <PosterContainer>
            {info?.seasons?.map((season) => (
              <Poster
                key={v4()}
                id={info?.id}
                title={season?.name}
                imgUrl={season?.poster_path}
                scroll={false}
                isMovie={false}
                link={true}
                season={season?.season_number}
              />
            ))}
          </PosterContainer>
        )}
      </SubSection>
      {toggleOverlay && (
        <Overlay handleToggle={handleToggle} videoKey={videoKey}>
          <Video url={videoKey} />
        </Overlay>
      )}
    </Container>
  );
};
DetailPresenter.propsTypes = {
  type: PropsTypes.string,
  info: PropsTypes.object,
  cast: PropsTypes.array,
  crew: PropsTypes.array,
  recommendations: PropsTypes.array,
  loading: PropsTypes.bool.isRequired,
  selected: PropsTypes.number.isRequired,
  handleSelected: PropsTypes.func.isRequired,
  seriesData: PropsTypes.array,
};
export default DetailPresenter;
