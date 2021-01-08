import React from "react";
import {windT} from "../redux/reducers/userReducer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Wind = ({wind : {deg, speed}} : {wind : windT}) : JSX.Element => {

  const windDirCalc = (deg : number) : string | null => {
    if ((0 <= deg && deg < 11.25) || (348.75 <= deg && deg <= 360)) return 'N'
    if (11.25 <= deg && deg < 33.75) return 'NNE'
    if (33.75 <= deg && deg < 56.25) return 'NE'
    if (56.25 <= deg && deg < 78.75) return 'ENE'
    if (78.75 <= deg && deg < 101.25) return 'E'
    if (101.25 <= deg && deg < 123.75) return 'ESE'
    if (123.75 <= deg && deg < 146.25) return 'SE'
    if (146.25 <= deg && deg < 168.75) return 'SSE'
    if (168.75 <= deg && deg < 191.25) return 'S'
    if (191.25 <= deg && deg < 213.75) return 'SSW'
    if (213.75 <= deg && deg < 236.25) return 'WS'
    if (236.25 <= deg && deg < 258.75) return 'WSW'
    if (258.75 <= deg && deg < 281.25) return 'W'
    if (281.25 <= deg && deg < 303.75) return 'WNW'
    if (303.75 <= deg && deg < 326.25) return 'NW'
    if (326.25 <= deg && deg < 348.75) return 'NNW'
    return null
  }

  return <>
    <Col xs='auto' className='m-2'>
      <Row>
        <div>{speed} m/s</div>
      </Row>
      <Row>
        <div>{windDirCalc(deg)}</div>
      </Row>
    </Col>
  </>
}

export default Wind