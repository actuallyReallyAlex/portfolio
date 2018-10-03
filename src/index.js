import React from 'react'
import ReactDOM from 'react-dom'
import './customStyle.css'
import Site from './Site'
import registerServiceWorker from './registerServiceWorker'
import packageInfo from '../package.json'

import LogRocket from 'logrocket'

LogRocket.init('alex-lee/portfolio-prod', {
  release: packageInfo.version
})

require('dotenv').config()

ReactDOM.render(<Site />, document.getElementById('root'))
registerServiceWorker()
