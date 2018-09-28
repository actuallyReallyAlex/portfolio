import React from 'react'
import ReactDOM from 'react-dom'
import './customStyle.css'
import Site from './Site'
import registerServiceWorker from './registerServiceWorker'

require('dotenv').config()

ReactDOM.render(<Site />, document.getElementById('root'))
registerServiceWorker()
