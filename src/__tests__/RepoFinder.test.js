import React from "react";
import { RepoFinder } from "../RepoFinder";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<RepoFinder />", () => {
  it("must render correctly", () => {
    const wrapper = shallow(<RepoFinder />);
    expect(wrapper).toMatchSnapshot();
  });
});
