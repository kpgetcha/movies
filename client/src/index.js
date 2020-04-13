import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Navbar } from "react-bootstrap";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const Imdb = () => {
  const [localSearchPhrase, setLocalSearchPhrase] = useState("");
  const [localPageNumber, setLocalPageNumber] = useState(1);

  const onSearch = (searchPhrase) => {
    setLocalSearchPhrase(searchPhrase);
  };

  const onPageNavigation = (pageNumber) => {
    setLocalPageNumber(pageNumber);
  };

  return (
    <React.StrictMode>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/"> Imdb Movies</Navbar.Brand>
        </Navbar>
        <Router>
          <Home
            path="/"
            localSearchPhrase={localSearchPhrase}
            onSearch={onSearch}
            localPageNumber={localPageNumber}
            onPageNavigation={onPageNavigation}
          />
          <Movie path="/movie/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<Imdb />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
