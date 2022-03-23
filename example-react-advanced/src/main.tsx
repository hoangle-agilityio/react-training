import React from 'react'
import ReactDOM from 'react-dom'
import ViewCategoryHook from './components/ViewCategoryHook'
import ViewPostHook from './components/ViewPostHook'
import ViewCategory from './hoc/ViewCategory'
import ViewPost from './hoc/ViewPost'
import './index.css'
import App from './SWR'

ReactDOM.render(
  <React.StrictMode>
    {/* <ViewPost/>
    <ViewCategory/>
    <ViewCategoryHook />
    <ViewPostHook /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
