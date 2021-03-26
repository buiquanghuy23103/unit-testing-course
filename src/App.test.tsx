import { shallow } from "enzyme"
import { findByTestAttr } from "../test/testUtils";
import App from "./App"

const setup = () => {
    return shallow(<App />);
}

test('should render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-app");
    expect(component).toHaveLength(1);
})
