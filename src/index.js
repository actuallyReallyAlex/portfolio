import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
// import './customStyle.css'


import Portfolio from './Portfolio'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Portfolio themeColor="blue" />, document.getElementById('root'))
registerServiceWorker()
