import React from "react"

type State = { isToggleOn: boolean };

export default class Toggle extends React.Component {
  state: State;

  constructor(props: Object) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(): void {
    this.setState(function (prevState: State): State {
      return ({
        isToggleOn: !prevState.isToggleOn
      });
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>Handling Events</h1>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
