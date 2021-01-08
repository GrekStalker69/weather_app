import {actionT, actionTypes} from "../actionTypes";

const {SET_CURRENT_CITY, SET_CITY_NAME, DELETE_CITY, SET_CITY_WEATHER, UPD_CITY_WEATHER, END_INIT} = actionTypes

export type weatherT = {
  "id": number,
  "main": string,
  "description": string,
  "icon": string
}

export type mainT = {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number
}

export type windT = {
  speed: number,
  deg: number
}

export type cityT = {
  coord : {
    lon : number,
    lat : number
  },
  weather: weatherT[],
  base: number,
  main: mainT,
  visibility: number,
  wind: windT,
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

const initState = {
  currentCityID : null as null | number,
  cities : [] as cityT[],
  citiesNames : [] as string[],
  initialised : false,
}

export type initUserT = typeof initState

const userReducer = (state = initState, action : actionT) : initUserT => {
  switch (action.type) {
    case (SET_CURRENT_CITY) : {
      return {
        ...state,
        currentCityID : action.payload.currentCityID
      }
    }
    case (SET_CITY_NAME) : {
      const newCity : string = action.payload.newCity;
      if (!state.citiesNames.includes(newCity)) return {
        ...state,
        citiesNames : [...state.citiesNames, newCity]
      }
      return state
    }
    case (DELETE_CITY) : {
      const cityID : number = action.payload.cityID;
      const cityName : string = state.cities[state.cities.findIndex((city) => city.id === cityID)].name;
      return {
        ...state,
        cities : state.cities.filter((city) => city.id !== cityID),
        citiesNames : state.citiesNames.filter((name) => name !== cityName)
      }
    }
    case (SET_CITY_WEATHER) : {
      const newCity : cityT = action.payload.city;
      if (state.cities.some((city) => city.name === newCity.name)) {
        const cityID : number = newCity.id;
        return {
          ...state,
          cities : state.cities.map((city, index) => index !== cityID ? city : newCity)
        }
      }
      return {
        ...state,
        cities : [...state.cities, newCity]
      }
    }
    case (END_INIT) : {
      return {
        ...state,
        initialised : true
      }
    }
    default : {
      return state
    }
  }
}

export default userReducer

export const setCurrentCityAC = (payload : {currentCityID : number}) => ({type : SET_CURRENT_CITY, payload})
export const setCityNameAC = (payload : {newCity : string}) => ({type : SET_CITY_NAME, payload})
export const deleteCityAC = (payload : {cityID : number}) => ({type : DELETE_CITY, payload})
export const setCityWeatherAC = (payload : {city : cityT}) => ({type : SET_CITY_WEATHER, payload})
export const updCityWeatherAC = (payload : {city : cityT}) => ({type : UPD_CITY_WEATHER, payload})
export const endInitAC = (payload : any) => ({type : END_INIT, payload})