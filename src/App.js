import { RepoFinder } from "./RepoFinder";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <Typography variant="h3">Github Repo Finder</Typography>
      <Typography variant="h6">
        Search for any topics you are interested in
      </Typography>
      {/* <div style={{ margin: "auto" }}> */}
      <div>
        <RepoFinder />
      </div>
    </div>
  );
}

export default App;
