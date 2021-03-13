import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats, { CongratsProps } from './Congrats';
import { findByTestAttr } from "../test/testUtils";

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

const setup = (props: CongratsProps): ShallowWrapper => {
    return shallow(<Congrats { ...props } />)
}

test("renders without error", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component).toHaveLength(1);
});

test("renders no text when `success` prop is false", () => {
    const wrapper = setup({ success: false });
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message.text()).toBe('');
});

test("renders non-empty congrats message when `success` prop is true", () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
});

