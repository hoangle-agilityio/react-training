import React from "react";

function FormattedDate(props: { date: Date }) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

/**
 * When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component.
 * React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen.
 * When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
 * Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
 * Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time.
 * Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen.
 * If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.
 */
export default class Clock extends React.Component {
  state: { date: Date };
  timerId!: number;

  constructor(props: Object) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>State And Lifecycle</h1>
        <h2><FormattedDate date={this.state.date} /></h2>
      </div>
    );
  }
}
