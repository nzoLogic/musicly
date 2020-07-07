import React from 'react'
import Router from './router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import musician from './musician'

const musiclyApp = combineReducers({
  'musician': musician.reducer,
})

const store = createStore(musiclyApp)

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
