import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";

const SearchBar = (props) => {
  const { localSearchPhrase, onSearch } = props;

  const [searchPhrase, setSearchPhrase] = useState(localSearchPhrase);

  useEffect(() => {
    setSearchPhrase(localSearchPhrase);
  }, [localSearchPhrase]);

  const onTextChange = (event) => {
    setSearchPhrase(event.target.value);
  };

  const handleOnSearch = () => {
    onSearch(searchPhrase);
  };

  return (
    <div>
      <br></br>
      <Container>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                onChange={onTextChange}
                placeholder="Search by movie name"
                value={searchPhrase}
              />
              <Button onClick={handleOnSearch} variant="primary">
                Search
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
