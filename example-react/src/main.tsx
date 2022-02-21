import React from "react"
import ReactDOM from "react-dom"
import ClassComponents from "./example-tsx/class-components"
import ComposingComponents from "./example-tsx/composing-components"
import Expressions from "./example-tsx/expressions"
import RenderingComponent from "./example-tsx/rendering-components"

ReactDOM.render(
  <React.StrictMode>
    <Expressions />
    <ClassComponents />
    <RenderingComponent name="Minh Hoang" />
    <ComposingComponents />
  </React.StrictMode>,
  document.getElementById("root")
)
