import { mount } from "enzyme"
import { findByTestAttr, storeFactory } from "../test/testUtils";
import App from "./App";
import { AppState } from "./configureStore";
import { Provider } from "react-redux";
import { getSecretWord } from "./actions";

// Make sure getSecretWord doesn't make network call
jest.mock('./actions');


const setup = (initialState: AppState = {
    success: false,
    guessedWords: [],
    secretWord: ''
}) => {
    const store = storeFactory(initialState);
    return mount(<Provider store={ store }><App /></Provider>);
}

test('should render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app");
    expect(component).toHaveLength(1);
});

describe('get a secret word', () => {
    beforeEach(() => {
        // getSecretWord is called after app mount. This method will reset
        // the number of times getSecretWord is called to 0.
        (getSecretWord as jest.Mock).mockClear();
    });

    test('should return a secret word upon app mount', () => {
        const wrapper = setup();
        expect(getSecretWord).toHaveBeenCalledTimes(1);
    });
    test('should NOT return a secret word upon app update', () => {
        const wrapper = setup();

        // use setProps because wrapper.update() doesn't trigger useEffect
        // https://github.com/enzymejs/enzyme/issues/2254
        wrapper.setProps({});
        expect(getSecretWord).toHaveBeenCalledTimes(0);
    });


})
