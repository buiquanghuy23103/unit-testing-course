import React from 'react';
import { shallow, ShallowWrapper } from "enzyme";
import Congrats, { CongratsProps } from './Congrats';
import { findByTestAttr } from "../test/testUtils";


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

