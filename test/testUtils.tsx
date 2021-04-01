import { ReactWrapper, ShallowWrapper } from "enzyme";
import { applyMiddleware, createStore } from "redux";
import { AppState, middlewares } from "../src/configureStore";
import rootReducer from '../src/reducers';

export const storeFactory = (initialState: AppState) => {
    return createStore(rootReducer, initialState, applyMiddleware(...middlewares));
}

/**
 * Return node(s) with the given data-test attribute
 */
export const findByTestAttr = (wrapper: ShallowWrapper | ReactWrapper, attrValue: string): ShallowWrapper | ReactWrapper => {
    return wrapper.find(`[data-test='${attrValue}']`);
}