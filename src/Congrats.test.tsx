import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats, { CongratsProps } from './Congrats';
import { findByTestAttr } from "../test/testUtils";

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

const setup = (props: CongratsProps = {}): ShallowWrapper => {
    return shallow(<Congrats { ...props } />)
}

test("renders without error", () => {
    const wrapper = setup();
    const congratsComponent = findByTestAttr(wrapper, "component-congrats");
    expect(congratsComponent).toHaveLength(1);
});

test("renders no text when `success` prop is false", () => {

});

test("renders non-empty congrats message when `success` prop is true", () => {

});

