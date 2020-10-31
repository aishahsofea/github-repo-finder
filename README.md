# Github Repo Finder

This project provides a simple web UI that allows you to search for repositories on GitHub. You simply need to type in the topic you are interested in and upon clicking the search button, you will be presented with relevant repositories. You only want to search for repos that are written in a certain programming language? Fret not, this UI is also equipped with a selection of programming languages you can choose from! On top of that, you can import all the searches done in a session by also a click of a button!

## What do you need to get started?

### 1. Install package manager

**[Node.js 14.9](https://nodejs.org/download/release/v14.9.0/)**

- Download the MSI package
- Follow the installation guide
- Check if Node is correctly installed by running `node --version` in a terminal

**Yarn 1.13**
- Use npm to install yarn; `npm i yarn@1.13.0 -g` 
- Check if Yarn is correctly installed; `yarn --version`

\* Note that the latest version might also work

### 2. Clone the project repo

1. Go to a local directory of your choice and open a terminal.
2. Run `git clone https://github.com/aishahsofea/github-repo-finder`
3. Go into the folder: `cd github-repo-finder`

### 3. Install node dependencies

Run `yarn install` to install dependencies. This might take a few minutes.

### 4. Run app in the development mode

Run `yarn start` to open [http://localhost:3000](http://localhost:3000) in a browser.\
Now that the UI is displayed, you can start searching for any topics.

## Snapshot testing

Run `yarn test` and all the test suites will be run in the interactive watch mode.\
Snapshot testing is implemented to check for changes when rendering the UI.\
Enter `q` to exit the interactive mode. Other options are also specified.

## Report

Notice that a link enclosed in a button is displayed after a search is completed. You can click on the link to download a CSV file that contains information of all the searches done. Note that refreshing the page will also refresh the CSV file.
