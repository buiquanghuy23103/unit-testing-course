import { ReactWrapper, ShallowWrapper } from "enzyme";

/**
 * Return node(s) with the given data-test attribute
 */
export const findByTestAttr = (wrapper: ShallowWrapper | ReactWrapper, attrValue: string): ShallowWrapper | ReactWrapper => {
    return wrapper.find(`[data-test='${attrValue}']`);
}