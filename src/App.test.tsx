import { shallow } from "enzyme"
import { findByTestAttr } from "../test/testUtils";
import App from "./App"

// Make sure getSecretWord doesn't make network call
jest.mock('./actions');
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord } from './actions';

const setup = () => {
    return shallow(<App />);
}

test('should render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app");
    expect(component).toHaveLength(1);
})
