import { createStore, combineReducers } from 'redux'
import RouterReducer from '../reducers/router'

const store = createStore(
  combineReducers({
    router: RouterReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
