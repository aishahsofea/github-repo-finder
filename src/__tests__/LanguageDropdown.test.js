import React from "react";
import { LanguageDropdown } from "../LanguageDropdown";
import { shallow, configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<LanguageDropdown />", () => {
  it("must render correctly", () => {
    const wrapper = shallow(<LanguageDropdown />);
    expect(wrapper).toMatchSnapshot();
  });
});
