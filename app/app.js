import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import routes from './routes'

// createStore and export to Chrome Redux DevTools
// TODO: not expose in production mode
const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension())
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('wechatNow')
)
