import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import Input from "./input";

const setup = () => {
    return shallow(<Input />);
}

test('should render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-input");
    expect(component).toHaveLength(1);
});
