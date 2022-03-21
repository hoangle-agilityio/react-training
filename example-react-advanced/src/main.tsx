import React from 'react'
import ReactDOM from 'react-dom'
import ViewCategory from './hoc/ViewCategory'
import ViewPost from './hoc/ViewPost'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ViewPost/>
    <ViewCategory/>
  </React.StrictMode>,
  document.getElementById('root')
)
