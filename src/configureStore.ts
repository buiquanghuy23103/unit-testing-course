import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;

export default store;