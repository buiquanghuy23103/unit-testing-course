import { mount, shallow } from "enzyme"
import { findByTestAttr, storeFactory } from "../test/testUtils";
import App from "./App";
import { AppState } from "./configureStore";
import { Provider } from "react-redux";

// Make sure getSecretWord doesn't make network call
jest.mock('./actions');
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord } from './actions';


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
        (mockGetSecretWord as jest.Mock).mockClear();
    });

    test('should return a secret word upon app mount', () => {
        const wrapper = setup();
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
    });
    test('should NOT return a secret word upon app update', () => {
        const wrapper = setup();
        // getSecretWord is called after app mount. This method will reset
        // the number of times getSecretWord is called to 0.
        (mockGetSecretWord as jest.Mock).mockClear();

        // use setProps because wrapper.update() doesn't trigger useEffect
        // https://github.com/enzymejs/enzyme/issues/2254
        wrapper.setProps({});
        expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
    });


})
