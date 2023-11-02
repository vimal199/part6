import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App.jsx'
import notereducer from './reducers/notereducer.js'
import filterReducer, { filterChange } from './reducers/filterReducer.js'
import { createNote } from './reducers/notereducer.js'
const root = ReactDOM.createRoot(document.getElementById('root'))
const reducer = combineReducers(
  {
    notes: notereducer,
    filter: filterReducer
  }
)
const store = createStore(reducer)
//console.log(store.getState());
//store.subscribe(() => console.log('state is ', store.getState))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))
const renderApp = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
renderApp()
//console.log(store.getState());
//store.subscribe(renderApp)
/* store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
}
) */

