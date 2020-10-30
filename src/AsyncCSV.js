import React from "react";
import { CSVLink } from "react-csv";

export class AsyncCSV extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CSVLink data={this.props.data} filename={"report.csv"}>
        IMPORT SEARCHES
      </CSVLink>
    );
  }
}
