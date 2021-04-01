import { applyMiddleware, createStore } from "redux";
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, {}, applyMiddleware(...middlewares));