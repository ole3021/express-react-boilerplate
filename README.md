# Express-React-Boilerplate

This is a boilerplate for start build Express&react proejct.

## Project Structure
```
.
├── app               // react client
│   ├── actions
│   ├── app.js        // client entry point
│   ├── components
│   ├── containers
│   ├── index.html
│   ├── languages
│   └── reducers
├── config             // project configurations
│   ├── env
│   ├── index.js
│   ├── initApp.js
│   ├── nodemon.json
│   └── webpack
├── lib                // common libraries
│   └── logger.js
├── package.json
├── server.js          // server entry point
├── src
│   ├── controllers    // server controllers
│   ├── models         // server models
│   └── views          // server views
└── test               // test scripts
    └── index.js

```

## Node modules
* [babel](https://babeljs.io/) Use Async/Await and other stable ES7 features
  * babel-core >>For Test functions
  * babel-polyfill >>Help Mocha to run js written in babel
  * babel-preset-es2015 >>ES6 features
  * babel-preset-stage-3 >>Stable ES7 features(Async/Await)
  * babel-eslint >>Extra syntax check for ES7, JSX
  * babel-loader >>For webpack to load file in Babel
  * babel-preset-react <<
  * babel-preset-react-hmre <<
* ~~[Chalk](https://github.com/chalk/chalk) >>Beautify console string style~~
* [Express](http://expressjs.com/)
  * express
* [mocha](https://mochajs.org/) >>TDD/BDD framework
* [nodemon](http://nodemon.io/) >>Automatically reload changes
* [react](https://facebook.github.io/react/) >>Hybrid Web UI framework
  * react-dom >>Allow react interact with DOM
  * react-redux >>react binding for redux
* [redux](http://redux.js.org/) >>State container for React
* [standard](http://standardjs.com/) >>Javascipt standard style and formatter
* [supertest](https://github.com/visionmedia/supertest) >>Http assertions framework
* [webpack](https://webpack.github.io/) >>Combine modules dependencies into static assets
  * html-webpack-plugin <<
  * webpack-dev-middleware >> Development utils, save files in memory, auto reload change files
  * webpack-hot-middleware >> Hot reload during file changes
* [winston](https://github.com/winstonjs/winston) >>Use to instead default log

## TODO:
- [ ] add mongodb sample
