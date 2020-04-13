import React, { useEffect, useState, useCallback } from "react";
import SearchBar from "../components/home/SearchBar";
import MovieList from "../components/home/MovieList";
import Config from "../config/config";

function Home(props) {
  const {
    localSearchPhrase,
    onSearch: onParentSearch,
    localPageNumber: pageNumber,
    onPageNavigation,
  } = props;
  const [movieListInfo, setMovieListInfo] = useState();

  const fetchMovies = useCallback((url) => {
    async function internalFetch() {
      const response = await fetch(url);
      const movieListResponse = await response.json();
      setMovieListInfo(movieListResponse);
    }
    internalFetch();
  }, []);

  useEffect(() => {
    if (!localSearchPhrase) {
      fetchMovies(`${Config.serverBaseUrl}/movie/popular/${pageNumber}`);
    } else {
      fetchMovies(
        `${Config.serverBaseUrl}/movie/search/${localSearchPhrase}/${pageNumber}`
      );
    }
  }, [fetchMovies, pageNumber, localSearchPhrase]);

  const onSearch = (searchPhrase) => {
    onParentSearch(searchPhrase);
    fetchMovies(`${Config.serverBaseUrl}/movie/search/${searchPhrase}/1`);
  };

  const onPageClick = (updatedPageNumber) => {
    onPageNavigation(updatedPageNumber);
    if (!localSearchPhrase) {
      fetchMovies(`${Config.serverBaseUrl}/movie/popular/${updatedPageNumber}`);
    } else {
      fetchMovies(
        `${Config.serverBaseUrl}/movie/search/${localSearchPhrase}/${updatedPageNumber}`
      );
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} localSearchPhrase={localSearchPhrase} />
      {movieListInfo && (
        <MovieList
          onPageClick={onPageClick}
          movieListInfo={movieListInfo}
        ></MovieList>
      )}
    </div>
  );
}

export default Home;
