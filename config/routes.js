import indexController from '../src/controllers/index'

module.exports = function (app) {
  console.log('>>>>> iom fdsaf');
  app.get('/', indexController.helloWorld)
}
