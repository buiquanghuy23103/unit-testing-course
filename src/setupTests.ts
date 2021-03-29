// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import enableHooks from 'jest-react-hooks-shallow';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

// useEffect will get called when the component is shallow rendered
// This is a workaround for the bug here: https://github.com/enzymejs/enzyme/issues/2086
enableHooks(jest);