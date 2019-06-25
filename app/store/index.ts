/**
 * app.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { createStore } from "redux"
import rootReducer from "../reducers/App";

/**
 * Defines a store with the root reducer.
 */
const store = createStore(rootReducer);

export default store;
