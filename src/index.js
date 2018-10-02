import React from 'react'
import ReactDOM from 'react-dom'
import './customStyle.css'
import Site from './Site'
import registerServiceWorker from './registerServiceWorker'
import packageInfo from '../package.json'

import LogRocket from 'logrocket';

const environment = 'dev'

if (!environment === 'dev') {
  LogRocket.init('alex-lee/portfolio-dev', {
    release: packageInfo.version
  });
}


require('dotenv').config()

ReactDOM.render(<Site />, document.getElementById('root'))
registerServiceWorker()
