import { createStore } from "redux";
import reducer from "./modules/weather";

const store = createStore(reducer);

export default store;
