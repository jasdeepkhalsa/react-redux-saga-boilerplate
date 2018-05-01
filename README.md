# Boilerplate react app with `redux`, `redux-saga`, `reselect` & `jest`

This app is an opinionated boilerplate app of best practice to show how best to use React together with `redux` and `redux-saga` to handle side-effects, as well as `reselect` for performance.

Unit tests are using `jest`.

This app is also designed with **scalability** in mind - to be able to become a large React application due to its performant stack choice and clever level of abstraction of files & folders.

It also contains some customisations from the out-of-the-box [Create React App](https://github.com/facebookincubator/create-react-app) functionality, which are:

* Using SCSS instead of CSS
* Importing styles using `:local` variables directly into the JavaScript to eliminate the need for name-spacing CSS
* Uses [`Normalize.css`](https://necolas.github.io/normalize.css/) instead of a [CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
* Using highly specific ESLint rules for keeping code beautiful across platforms (notably with trailing commas in objects, no semi-colons & [indenting with tabs, aligning with spaces](https://dmitryfrank.com/articles/indent_with_tabs_align_with_spaces))
* Loosely follows the [presentational vs. container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) pattern
* Prioritises [stateless functional components](https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541) over class-based components
* Utilises a highly underused feature of `webpack`'s `import` which automatically selects the `index.js` file if a folder is provided to it as a path (derived from how `node` handles `index.js` files)
* Same names used for most component files to save time when creating new components

## Pre-requisites

* node
* yarn

## Installation

```bash
$ yarn
```

## Usage

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Acknowledgements

* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)
* A shout out to the creators of `react`, `redux`, `react-redux` & `redux-saga` - your fantastic documentation has really helped in the creation of this app
* The open source community for actively taking time to share useful patterns and code for writing React apps