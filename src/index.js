import React from 'react'
import ReactDOM from 'react-dom'
import './customStyle.css'
import Site from './Site'
import registerServiceWorker from './registerServiceWorker'

import LogRocket from 'logrocket';
LogRocket.init('alex-lee/portfolio-dev');

require('dotenv').config()

ReactDOM.render(<Site />, document.getElementById('root'))
registerServiceWorker()
