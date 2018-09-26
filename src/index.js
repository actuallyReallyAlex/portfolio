import React from 'react'
import ReactDOM from 'react-dom'

import Site from './Site'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Site />, document.getElementById('root'))
registerServiceWorker()
