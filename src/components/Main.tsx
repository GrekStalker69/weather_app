import React from "react";
import {mainT, windT} from "../redux/reducers/userReducer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Wind from "./Wind";

const Main = ({main : {temp, feels_like, humidity, pressure}, wind} : {main : mainT, wind : windT}) : JSX.Element => {

  return <>
    <Col xs='auto' className='mt-5 m-4'>
      <Row>
        <div>{temp} °C</div>
      </Row>
    </Col>
    <Col xs='auto' className='m-2'>
      <Row>
        <Col xs='auto' className='m-2'>
          <Row>
            <div>{feels_like} °C</div>
          </Row>
          <Row>
            <div>Feels like</div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs='auto' className='m-2'>
          <Row>
            <div>{humidity} %</div>
          </Row>
          <Row>
            <div>Humidity</div>
          </Row>
        </Col>
      </Row>
    </Col>
    <Col xs='auto' className='m-2'>
      <Row>
        <Col xs='auto' className='m-2'>
          <Row>
            <div>{pressure} hPa</div>
          </Row>
          <Row>
            <div>Pressure</div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Wind wind={wind} />
      </Row>
    </Col>
  </>
}

export default Main