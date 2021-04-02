import { Action, applyMiddleware, createStore } from "redux";
import rootReducer from './reducers';
import ReduxThunk, { ThunkAction } from 'redux-thunk';

export const middlewares = [ReduxThunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export default store;