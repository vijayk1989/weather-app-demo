// Initial state

const initialState = {
  city: "",
  weatherData: null
};

// Constants
export const SET_WEATHER = "SET_WEATHER";
export const CHANGE_CITY = "CHANGE_CITY";

// Actions:
export const setWeather = payload => {
  return { type: SET_WEATHER, payload };
};

export const changeCity = payload => {
  return { type: CHANGE_CITY, payload };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_WEATHER:
      console.log("SET WEATHER EVENT FIRED");
      return { ...state, weatherData: action.payload };
    case CHANGE_CITY:
      console.log("CHANGE CITY EVENT FIRED");
      return { ...state, city: action.payload };
    default:
      return state;
  }
}
