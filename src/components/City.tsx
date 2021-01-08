import React from "react";
import {cityT, deleteCityAC, setCurrentCityAC} from "../redux/reducers/userReducer";
import store from "../redux/store";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const City = ({city} : {city : cityT}) => {

  const handleCityClick = () => {
    store.dispatch(setCurrentCityAC({currentCityID : city.id}))
  }

  const handleDeleteCity = (event : React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    store.dispatch(deleteCityAC({cityID : city.id}))
  }

  return <>
    <Col xs="auto">
      <div onClick={handleCityClick}>
        <div>{city.name}</div>
        <img alt={'current weather'} src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} />
        <div>{city.main.temp} °C</div>
        <Button
          variant='secondary'
          onClick={handleDeleteCity}
        >DELETE</Button>
      </div>
    </Col>
  </>
}

export default City