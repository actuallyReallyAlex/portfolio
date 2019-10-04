import React from 'react'
import * as Sentry from '@sentry/browser'
import LogRocket from 'logrocket'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './redux/store/store'

const { NODE_ENV } = process.env

if (NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://5a28f5da01f34b0283639b079218978e@sentry.io/1492278'
  })

  LogRocket.init('alex-lee/portfolio-prod')
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
