import React from 'react';
import CurrentCityArea from "./components/CurrentCityArea";
import CitiesArea from "./components/CitiesArea";
import Header from "./components/Header";
import {endInitAC, initUserT, setCityNameAC, setCurrentCityAC} from "./redux/reducers/userReducer";
import {useSelector} from "react-redux";
import store from "./redux/store";
import {nameFetchAC} from "./redux/sagas/weatherFetchSaga";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const selectorInit = ({user} : {user : initUserT}) : boolean => {
  const {initialised} = user;
  return initialised
}

export const CITIES_NAMES = 'CITIES_NAMES';
export const CURRENT_CITY = 'CURRENT_CITY';

function App() : JSX.Element {

  if (!useSelector(selectorInit)) {
    const currentCityID = Number(window.localStorage.getItem(CURRENT_CITY));
    if (currentCityID) {
      store.dispatch(setCurrentCityAC({currentCityID}))
    }

    const citiesNames = window.localStorage.getItem(CITIES_NAMES);
    if (citiesNames) {
      citiesNames.split('/').forEach((name) => {
        store.dispatch(setCityNameAC({newCity : name}));
        store.dispatch(nameFetchAC({cityName : name, shouldNotSetCurrent : true}));
      })
    }
    store.dispatch(endInitAC(null))
  }

  return <Container className='bg' fluid>
      <Row className="justify-content-md-center p-3">
        <Header/>
      </Row>

      <Row className="justify-content-md-center p-3">
        <CurrentCityArea/>
      </Row>

      <Row className="justify-content-md-center p-3">
        <CitiesArea/>
      </Row>
  </Container>
}

export default App;
