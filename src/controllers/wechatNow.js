import passport from 'passport'

const viewPath = process.cwd() + '/app/pages/'

export const login = (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/')
    return
  }
  res.sendFile(viewPath + 'login.html')
}

export const loginFail = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Login failed, wrong email or password'
})

export const loginSuccess = (req, res) => {
  const redirectTo = req.session.returnTo ? req.session.returnTo : '/'
  delete req.session.returnTo
  res.redirect(redirectTo)
}

export const logout = (req, res) => {
  req.logout()
  req.flash('success', 'Logout success')
  res.redirect('/login')
}

export const forget = (req, res) => {
  res.sendFile(viewPath + 'forget.html')
}

export const recoverPassword = (req, res) => {
  // TODO: Implement recover passowrd function
  res.send('>>>Not available now!!!<<<')
}
