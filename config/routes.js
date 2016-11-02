import { wechatNow } from '../src/controllers'

export default (app, passport) => {
  app.get('/login', wechatNow.login)
  app.post('/login', wechatNow.loginFail, wechatNow.loginSuccess)
  app.get('/logout', wechatNow.logout)
  app.get('/forget', wechatNow.forget)
  app.post('/forget', wechatNow.recoverPassword)
}
