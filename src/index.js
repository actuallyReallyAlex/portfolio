import React from 'react'
import ReactDOM from 'react-dom'
import './customStyle.css'
import Site from './Site'
import registerServiceWorker from './registerServiceWorker'
import packageInfo from '../package.json'

import LogRocket from 'logrocket'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-124507483-3')

LogRocket.init('alex-lee/portfolio-prod', {
  release: packageInfo.version
})

require('dotenv').config()

ReactDOM.render(<Site />, document.getElementById('root'))
registerServiceWorker()
