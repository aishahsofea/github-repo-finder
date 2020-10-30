import React from "react";
import { LanguageDropdown } from "./LanguageDropdown";
import { ResultViewer } from "./ResultViewer";
import { AsyncCSV } from "./AsyncCSV";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

export class RepoFinder extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleFetchApi = this.handleFetchApi.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.state = {
      data: [],
      results: [],
      page: 0,
      total_count: 10,
      text: "",
      language: null,
    };
  }

  handleLanguage(lang) {
    this.setState({
      language: lang,
    });
  }

  handleFetchApi() {
    const { text, language, page } = this.state;
    const lang = language ? `+language:${language}` : "";
    const apiUrl = `https://api.github.com/search/repositories?q=topic:${text}${lang}&page=${page}`;

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.total_count === 0) {
          alert("Sorry, no results found!");
        }

        let joinedData = [...this.state.data];
        data.items.map((item) => {
          const newData = {
            topic: text,
            language: language,
            repoName: item.name,
            repoUrl: item.html_url,
          };
          joinedData.push(newData);
        });

        this.setState({
          data: joinedData,
          results: data.items,
          total_count: data.total_count,
        });
      });
  }

  handleChangePage(event, newPage) {
    console.log("change page");
    this.setState(
      {
        page: newPage,
      },
      () => this.handleFetchApi()
    );
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleClick() {
    if (!this.state.text) {
      alert("Please insert topic you're interested to search!");
      return;
    }
    this.setState(
      {
        page: 1,
      },
      () => this.handleFetchApi()
    );
  }

  render() {
    const { data, results, page, total_count, language } = this.state;

    return (
      <div>
        <TextField
          id="outlined-basic"
          label="Search Repositories"
          variant="outlined"
          onChange={(event) => this.handleChange(event)}
        />
        <LanguageDropdown
          handleLanguage={this.handleLanguage}
          language={language}
        />
        <Button
          style={{ height: "50px", marginRight: "10px" }}
          variant="contained"
          onClick={() => this.handleClick()}
        >
          <SearchIcon />
        </Button>
        {results && results.length > 0 && (
          <Button
            style={{ height: "50px", marginRight: "10px" }}
            variant="contained"
          >
            <AsyncCSV data={data} />
            <SaveAltIcon />
          </Button>
        )}

        {results && results.length > 0 && <ResultViewer results={results} />}
        {results && results.length > 0 && (
          <Pagination
            style={{ display: "inline-block", verticalAlign: "middle" }}
            count={total_count >= 300 ? 10 : Math.ceil(total_count / 30)}
            page={page}
            onChange={(event, newPage) => this.handleChangePage(event, newPage)}
          />
        )}
      </div>
    );
  }
}
