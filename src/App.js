import React from "react";
import { RepoFinder } from "./RepoFinder";
import Typography from "@material-ui/core/Typography";

export class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <Typography variant="h3">Github Repo Finder</Typography>
        <Typography variant="h6">
          Search for any topics you are interested in
        </Typography>
        <div>
          <RepoFinder />
        </div>
      </div>
    );
  }
}
