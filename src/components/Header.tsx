import React, {useState} from "react";
import store from "../redux/store";
import {nameFetchAC} from "../redux/sagas/weatherFetchSaga";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const Header = () => {
  const [search, setSearch] = useState('')
  const handleSearch = () => {
    store.dispatch(nameFetchAC({cityName : search}))
  }
  const handleInput = (event : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return <header>
    <Col md="auto">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter your city"
          onChange={handleInput}
        />
        <InputGroup.Append>
          <Button
            variant='primary'
            onClick={handleSearch}
          >SEARCH</Button>
        </InputGroup.Append>
      </InputGroup>
    </Col>
  </header>
}

export default Header