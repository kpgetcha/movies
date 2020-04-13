import React, { useEffect, useState } from "react";
import { Pagination, Container, Row, Col } from "react-bootstrap";
import { navigate } from "@reach/router";
import MovieCard from "../movie/MovieCard";

function MovieList(props) {
  const { onPageClick, movieListInfo } = props;
  const { results: movies, page: activePage, total_pages } = movieListInfo;
  const [currentPageNumber, setCurrentPageNumber] = useState(activePage);

  useEffect(() => {
    setCurrentPageNumber(activePage);
  }, [activePage]);

  const onPrevClick = () => {
    setCurrentPageNumber(currentPageNumber - 1);
    onPageClick(currentPageNumber - 1);
  };

  const onNextClick = () => {
    setCurrentPageNumber(currentPageNumber + 1);
    onPageClick(currentPageNumber + 1);
  };

  const getPageItems = () => {
    return (
      <React.Fragment>
        <Pagination.Item
          disabled={currentPageNumber <= 1}
          onClick={onPrevClick}
        >
          Prev
        </Pagination.Item>
        <Pagination.Item
          disabled={currentPageNumber >= total_pages}
          onClick={onNextClick}
        >
          Next
        </Pagination.Item>
      </React.Fragment>
    );
  };

  const chunkArray = (movies, size) => {
    let result = [];

    movies.forEach((movie) => {
      let lastArray = result[result.length - 1];
      if (!lastArray || lastArray.length === size) {
        result.push([movie]);
      } else {
        lastArray.push(movie);
      }
    });

    return result;
  };

  const goToMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  const displayMovies = () => {
    if (movies.length === 0) {
      return <h1>No movies found</h1>;
    }

    const rows = chunkArray(movies, 3);

    return (
      <Container>
        {rows.map((row, index) => {
          return (
            <Row style={{ padding: "20px" }} key={index}>
              {row.map((movie) => {
                return (
                  <Col
                    onClick={() => {
                      goToMovie(movie.id);
                    }}
                    key={movie.id}
                    style={{ cursor: "pointer" }}
                  >
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Container>
    );
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Pagination>{getPageItems()}</Pagination>
          </Col>
        </Row>
      </Container>
      <ul>{movies && displayMovies()}</ul>
    </div>
  );
}

export default MovieList;
