import React from 'react'
import ReactDOM from 'react-dom'
import ViewCategoryHook from './components/ViewCategoryHook'
import ViewPostHook from './components/ViewPostHook'
import ViewCategory from './hoc/ViewCategory'
import ViewPost from './hoc/ViewPost'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ViewPost/>
    <ViewCategory/>
    <ViewCategoryHook />
    <ViewPostHook />
  </React.StrictMode>,
  document.getElementById('root')
)
