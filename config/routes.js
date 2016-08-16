import indexController from '../src/controllers/index'

module.exports = function (app) {
  app.get('/', indexController.helloWorld)
}
