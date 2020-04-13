import React, { useState, useEffect, useCallback } from "react";
import { useParams, navigate } from "@reach/router";
import Config from "../config/config";

function Movie(props) {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState();

  const fetchMovies = useCallback((url) => {
    async function internalFetch() {
      const response = await fetch(url);
      const movieDetailsResponse = await response.json();
      setMovieDetails(movieDetailsResponse);
    }
    internalFetch();
  }, []);

  useEffect(() => {
    fetchMovies(`${Config.serverBaseUrl}/movie/${params.id}`);
  }, [fetchMovies, params.id]);

  const getCast = () => {
    let topCast = movieDetails.credits.cast.slice(0, 5);
    return topCast
      .map((cast) => {
        return cast.name;
      })
      .join();
  };

  const backButtonHandle = (event) => {
    console.log("back button called");
    navigate("/");
  };

  return (
    <div className="App">
      {movieDetails && (
        <main className="mt-5 pt-4">
          <div className="container dark-grey-text mt-5">
            <p className="lead font-weight-bold">
              <button
                type="button"
                onClick={backButtonHandle}
                className="btn btn-primary btn-rounded"
              >
                Back
              </button>
            </p>

            <div className="row wow fadeIn">
              <div className="col-md-6 mb-4">
                <img
                  src={`${Config.imageBaseUrl}/original/${movieDetails.poster_path}`}
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-md-6 mb-4">
                <div className="p-4">
                  <div className="mb-3">
                    <span className="badge purple mr-1">
                      Rating: {movieDetails.vote_average}
                    </span>

                    <span className="badge blue mr-1">
                      Total votes: {movieDetails.vote_count}
                    </span>
                    <span className="badge blue mr-1">
                      Release date: {movieDetails.release_date}
                    </span>
                  </div>

                  <p className="lead">
                    <span>{movieDetails.title}</span>
                  </p>

                  <p className="lead">
                    <span>
                      <q>
                        <i>{movieDetails.tagline}</i>
                      </q>
                    </span>
                  </p>
                  <p className="lead font-weight-bold">Overview:</p>
                  <p>{movieDetails.overview}</p>
                  <p className="lead font-weight-bold">Overview:</p>
                  <p>{getCast()}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Movie;
