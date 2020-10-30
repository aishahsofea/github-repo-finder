import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

export class ResultViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { results } = this.props;
    return (
      <Paper
        style={{
          margin: "30px",
          maxWidth: "80vw",
        }}
        elevation={3}
      >
        <List>
          {results &&
            results.map((result) => (
              <ListItem
                button
                component="a"
                key={result.id}
                href={result.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <ListItemText
                  primary={result.name}
                  secondary={result.description}
                />
                <br />
              </ListItem>
            ))}
        </List>
      </Paper>
    );
  }
}
