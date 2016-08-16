# koa2-react-boilerplate

This is a boilerplate for start build Express&react proejct.

## Project Structure
```
.
├── app               // client react folder
├── config            // configurations like routes, environments, and enums
├── lib               // common libraries
├── src               // server folder
│   ├── controllers   // server controllers
│   ├── models        // server models
│   └── views         // server views
└── test              // test scripts
```

## Node modules
* [babel](https://babeljs.io/) Use Async/Await and other stable ES7 features
  * babel-core >>For Test functions
  * babel-polyfill >>Help Mocha to run js written in babel
  * babel-preset-es2015 >>ES6 features
  * babel-preset-stage-3 >>Stable ES7 features(Async/Await)
  * babel-eslint >>Extra syntax check for ES7, JSX
* [Express](http://expressjs.com/)
  * express
* [mocha](https://mochajs.org/) >>TDD/BDD framework
* [nodemon](http://nodemon.io/) >>Automatically reload changes
* [standard](http://standardjs.com/) >>Javascipt standard style and formatter
* [supertest](https://github.com/visionmedia/supertest) >>Http assertions framework
* [winston](https://github.com/winstonjs/winston) >>Use to instead default log

## TODO:
- [ ] add mongodb sample
- [ ] add react sample
- [ ] add webpack sample
