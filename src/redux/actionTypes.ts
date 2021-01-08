export const actionTypes = {
  SET_CURRENT_CITY : "SET_CURRENT_CITY",
  SET_CITY_NAME : "SET_CITY_NAME",
  DELETE_CITY : "DELETE_CITY",
  SET_CITY_WEATHER : "SET_CITY_WEATHER",
  UPD_CITY_WEATHER : "UPD_CITY_WEATHER",
  FETCH_WEATHER : "FETCH_WEATHER",
  END_INIT : 'END_INIT'
}

export type actionT = {
  type : string,
  payload : any
}