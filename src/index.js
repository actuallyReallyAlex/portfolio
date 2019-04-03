import React from 'react'
import ReactDOM from 'react-dom'
import './customStyle.css'
import Site from './Site'
import registerServiceWorker from './registerServiceWorker'
import ReactGA from 'react-ga'
import * as Sentry from '@sentry/browser'
import ErrorBoundary from './ErrorBoundary'
ReactGA.initialize('UA-124507483-3')
ReactGA.pageview('/home')

Sentry.init({
  dsn: 'https://9bdeb775ed794184b80f143e62dae44d@sentry.io/1429953'
})

ReactDOM.render(
  <ErrorBoundary>
    <Site />
  </ErrorBoundary>,
  document.getElementById('root')
)
registerServiceWorker()
