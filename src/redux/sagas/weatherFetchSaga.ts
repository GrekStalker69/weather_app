import {call, put, takeEvery} from "redux-saga/effects";
import {actionT, actionTypes} from "../actionTypes";
import {cityT, setCityWeatherAC, setCityNameAC, setCurrentCityAC} from "../reducers/userReducer";
import {weatherFetchByCity, weatherFetchByLocation} from "./API";

const {FETCH_WEATHER} = actionTypes;

function* weatherFetchWorker(action : actionT) {
  try {
    let response;
    if (action.payload.cityName) {
      const {cityName} = action.payload;
      response = yield call(weatherFetchByCity, cityName);
    } else if (action.payload.lat || (action.payload.lat === 0)) {
      const {lat, lon} = action.payload;
      response = yield call(weatherFetchByLocation, lat, lon);
    }
    const {data : city}: { data: cityT } = response;

    if (!action.payload.shouldNotSetCurrent) {
      yield put(setCurrentCityAC({currentCityID : city.id}))
    }

    yield put(setCityNameAC({newCity : city.name}))
    yield put(setCityWeatherAC({city}));
  }
  catch (e) {
    let message = "Oh shit I'm sorry.";
    if (e.message === 'Network Error') message += " Check your internet connection please.";
    if (e.response.status === 404) message += " Check your city name please.";
    alert(message);
  }
}

export default function* weatherFetchSaga() {
  yield takeEvery(FETCH_WEATHER, weatherFetchWorker)
}

export const nameFetchAC = (payload : {cityName : string, shouldNotSetCurrent? : boolean}) : actionT => ({type : FETCH_WEATHER, payload})
export const locationFetchAC = (payload : {lat : number, lon : number, shouldNotSetCurrent? : boolean}) : actionT => ({type : FETCH_WEATHER, payload})