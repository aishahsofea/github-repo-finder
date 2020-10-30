import React from "react";
import { ResultViewer } from "../ResultViewer";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<ResultViewer />", () => {
  it("must render correctly", () => {
    const wrapper = shallow(<ResultViewer />);
    expect(wrapper).toMatchSnapshot();
  });
});
