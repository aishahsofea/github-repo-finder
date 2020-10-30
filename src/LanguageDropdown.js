import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export class LanguageDropdown extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleLanguage(event.target.value);
  }

  render() {
    const languages = [
      "Python",
      "JavaScript",
      "Java",
      "C#",
      "C",
      "C++",
      "Go",
      "R",
      "Swift",
      "PHP",
    ];
    return (
      <FormControl
        style={{
          marginRight: "50px",
          marginLeft: "50px",
          minWidth: 200,
          textAlign: "left",
        }}
      >
        <InputLabel>Language</InputLabel>
        <Select
          onChange={(event) => this.handleChange(event)}
          value={this.props.language}
        >
          <MenuItem value={null}>{null}</MenuItem>
          {languages.map((lang) => (
            <MenuItem value={lang} key={lang}>
              {lang}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}
