import React from "react";
import { Card } from "react-bootstrap";
import Config from "../../config/config";

function MovieCard(props) {
  const {
    movie: { backdrop_path, poster_path, title, vote_average, overview },
  } = props;
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={
          poster_path
            ? `${Config.imageBaseUrl}/w300/${poster_path}`
            : `${Config.imageBaseUrl}/w300/${backdrop_path}`
        }
      />
      <Card.Body>
        <Card.Title>
          {title}
          <br></br>
          Rating:{vote_average}
        </Card.Title>
        <Card.Text>{overview}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
