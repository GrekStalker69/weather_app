import React, {useEffect} from "react";
import {useSelector} from "react-redux"
import {cityT, initUserT} from "../redux/reducers/userReducer";
import Weather from "./Weather";
import Main from "./Main";
import store from "../redux/store";
import {locationFetchAC} from "../redux/sagas/weatherFetchSaga";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CURRENT_CITY = 'CURRENT_CITY';

const selectorCurrentCity = ({user} : {user : initUserT}) : undefined | cityT => {
  const {cities, currentCityID} = user;
  if (currentCityID) {
    window.localStorage.setItem(CURRENT_CITY, currentCityID.toString());
  }
  return cities.find((city) => city.id === currentCityID);
}

const CurrentCityArea = () : JSX.Element => {

  useEffect(() => {
    if (!store.getState().user.currentCityID) {
    const geo = navigator.geolocation;
    geo.getCurrentPosition((location) => {
      const lat = location.coords.latitude;
      const lon = location.coords.longitude;
      store.dispatch(locationFetchAC({lat, lon}));
    })}
  }, [])

  const currentCity = useSelector(selectorCurrentCity);

  if (!currentCity) return <div>Issues getting your location</div>

  const {weather, name, main, wind} = currentCity;

  return <>
    <Col xs='auto'>
      <Row className="justify-content-md-center">
        <div>{name}</div>
      </Row>
      <Weather weather={weather[0]} />
    </Col>
    <Col xs='auto'>
      <Row>
        <Main main={main} wind={wind}/>
      </Row>
    </Col>
  </>
}

export default CurrentCityArea