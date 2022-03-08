import React from 'react'
import ReactDOM from 'react-dom'
import ExampleEffect from './components/UseEffect'
import App from './components/UseState'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ExampleEffect />
  </React.StrictMode>,
  document.getElementById('root')
)
