# mn_wechat_now_v2
:star2: WechatNow V2 Repo :star2:

## Setup&start

`npm install` will install all the required modules

* `npm start` -> Start the Project
* `npm test` -> Start the Test

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

### Node modules
* [babel](https://babeljs.io/) Use Async/Await and other stable ES7 features
  * babel-core >>For Test functions
  * babel-polyfill >>Help Mocha to run js written in babel
  * babel-preset-es2015 >>ES6 features
  * babel-preset-stage-3 >>Stable ES7 features(Async/Await)
  * babel-eslint >>Extra syntax check for ES7, JSX
  * babel-loader >>For webpack to load file in Babel
  * babel-preset-react <<
  * babel-preset-react-hmre <<
* [Express](http://expressjs.com/)
  * express
* [mocha](https://mochajs.org/) >>TDD/BDD framework
* [nodemon](http://nodemon.io/) >>Automatically reload changes
* [react](https://facebook.github.io/react/) >>Hybrid Web UI framework
  * react-dom >>Allow react interact with DOM
  * [react-redux](https://github.com/reactjs/react-redux) >>React binding for redux
  * [react-router](https://github.com/reactjs/react-router) >>Routing library for react
  * [react-router-redux](https://github.com/reactjs/react-router-redux) >> Sync React router in Redux
* [redux](http://redux.js.org/) >>State container for React
* [standard](http://standardjs.com/) >>Javascipt standard style and formatter
* [supertest](https://github.com/visionmedia/supertest) >>Http assertions framework
* [webpack](https://webpack.github.io/) >>Combine modules dependencies into static assets
  * html-webpack-plugin <<
  * webpack-dev-middleware >> Development utils, save files in memory, auto reload change files
  * webpack-hot-middleware >> Hot reload during file changes
* [winston](https://github.com/winstonjs/winston) >>Use to instead default log

## Best Practical Used

### Code Management(Git)
[A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)

### React-Redux
[Reducing Boilerplate](http://redux.js.org/docs/recipes/ReducingBoilerplate.html)

### ChangeLog
[Keep a CHANGELOG](http://keepachangelog.com/en/0.3.0/)
