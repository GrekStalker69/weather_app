import React from "react";
import {weatherT} from "../redux/reducers/userReducer";
import Row from "react-bootstrap/Row";

const Weather = ({weather : {main, icon}} : {weather : weatherT}) => {

  return <>
    <Row className="justify-content-md-center">
      <img alt={'current weather'} src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
    </Row>
    <Row className="justify-content-md-center">
    <div>{main}</div>
  </Row>
  </>
}

export default Weather