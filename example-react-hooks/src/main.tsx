import React from 'react'
import ReactDOM from 'react-dom'
import ExampleUseCallback from './components/UseCallback'
import ExampleUseContext from './components/UseContext'
import ExampleEffect from './components/UseEffect'
import ExampleUseMemo from './components/UseMemo'
import ExampleUseReducer from './components/UseReducer'
import ExampleUseRef from './components/UseRef'
import App from './components/UseState'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ExampleEffect />
    <ExampleUseContext />
    <ExampleUseRef />
    <ExampleUseReducer />
    <ExampleUseCallback />
    <ExampleUseMemo />
  </React.StrictMode>,
  document.getElementById('root')
)
