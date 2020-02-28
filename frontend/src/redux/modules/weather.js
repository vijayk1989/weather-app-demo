// Initial state

const initialState = {
  city: "",
  weatherData: null,
  isLoading: false
};

// Constants
export const SET_WEATHER = "SET_WEATHER";
export const CHANGE_CITY = "CHANGE_CITY";
export const CHANGE_LOADING = "CHANGE_LOADING";

// Actions:
export const setWeather = payload => {
  return { type: SET_WEATHER, payload };
};

export const changeCity = payload => {
  return { type: CHANGE_CITY, payload };
};

export const changeLoading = () => {
  return { type: CHANGE_LOADING };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, weatherData: action.payload };
    case CHANGE_CITY:
      return { ...state, city: action.payload };
    case CHANGE_LOADING:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
}
