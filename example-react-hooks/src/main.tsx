import React from 'react'
import ReactDOM from 'react-dom'
import ExampleUseCallback from './components/UseCallback'
import ExampleUseContext from './components/UseContext'
import ExampleEffect from './components/UseEffect'
import ExampleUseImperativeHandle from './components/UseImperativeHandle'
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
    <ExampleUseImperativeHandle />
  </React.StrictMode>,
  document.getElementById('root')
)
