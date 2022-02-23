import React from "react"
import ReactDOM from "react-dom"
import ClassComponents from "./example-tsx/class-components"
import ComposingComponents from "./example-tsx/composing-components"
import { App, WelcomeDialog } from "./example-tsx/composition"
import LoginControl from "./example-tsx/conditional-rendering"
import Expressions from "./example-tsx/expressions"
import Comment from "./example-tsx/extracting-components"
import { EssayForm, FileInput, FlavorForm, NameForm } from "./example-tsx/forms"
import Toggle from "./example-tsx/handling-event"
import Calculator from "./example-tsx/lifting-state-up"
import RenderingComponent from "./example-tsx/rendering-components"
import Clock from "./example-tsx/state-lifecycle"

ReactDOM.render(
  <React.StrictMode>
    <Expressions />
    <ClassComponents />
    <RenderingComponent name="Minh Hoang" />
    <ComposingComponents />
    <Comment />
    <Clock />
    <Toggle />
    <LoginControl />
    <NameForm />
    <EssayForm />
    <FlavorForm />
    <FileInput />
    <Calculator />
    <WelcomeDialog />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
