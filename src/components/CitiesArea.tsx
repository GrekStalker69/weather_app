import React from "react";
import {useSelector} from "react-redux";
import {cityT, initUserT} from "../redux/reducers/userReducer";
import City from "./City";
import {CITIES_NAMES} from "../App";

const selectorCities = ({user} : {user : initUserT}) : null | cityT[] => {
  const {cities, currentCityID, citiesNames} = user;
  if (citiesNames.length) {
    window.localStorage.setItem(CITIES_NAMES, citiesNames.join('/'));
  }
  if (cities.length) return cities.filter((city) => city.id !== currentCityID);
  return null
}

const CitiesArea = () : JSX.Element => {

  const cities = useSelector(selectorCities);

  if (!(cities && cities.length)) return <div>No cities added</div>

  return <>
    {cities.map((city) => <City key={city.id} city={city}/>)}
  </>
}

export default CitiesArea