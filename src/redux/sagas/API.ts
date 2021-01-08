import axios from "axios";

const APIKey = 'd3fb08794521849590d6d66ded41cb13';
const units = 'metric';

export const weatherFetchByCity = (city : string) => axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=${units}`)
export const weatherFetchByLocation = (lat : number, lon : number) => axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}&units=${units}`)