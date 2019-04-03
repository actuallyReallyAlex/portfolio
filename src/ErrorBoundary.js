import { Component } from 'react'
import * as Sentry from '@sentry/browser'

class ErrorBoundary extends Component {
  state = { error: null }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }

  render() {
    return this.props.children
  }
}

export default ErrorBoundary
