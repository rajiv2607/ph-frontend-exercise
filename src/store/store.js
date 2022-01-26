

import { createStore } from "redux";
import reducer from '../reducer/rootReducer';

let store =  createStore(reducer);
export default store