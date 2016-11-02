import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import Index from './pages/Index'
import Test from './pages/Test'

export default (
  <Route component={App}>
    <Route path='/' component={Index} />
    <Route path='/test' component={Test} />
  </Route>
)
