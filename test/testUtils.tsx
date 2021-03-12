import { ShallowWrapper } from "enzyme";

/**
 * Return node(s) with the given data-test attribute
 */
export const findByTestAttr = (wrapper: ShallowWrapper, attrValue: string): ShallowWrapper => {
    return wrapper.find(`[data-test='${attrValue}']`);
}