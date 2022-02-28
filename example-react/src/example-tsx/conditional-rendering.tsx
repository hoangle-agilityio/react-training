import React from "react";

type LoggedInObj = { isLoggedIn: boolean };

function UserGreeting(): JSX.Element {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <h2>Welcome back!</h2>
    </div>
  );
}

function GuestGreeting(): JSX.Element {
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <h2>Please sign up.</h2>
    </div>
  );
}

function Greeting(props: LoggedInObj): JSX.Element {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />
  }

  return <GuestGreeting />
}

function LoginButton(props: { onClick: React.MouseEventHandler }) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props: { onClick: React.MouseEventHandler }) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default class LoginControl extends React.Component {
  state: LoggedInObj;

  constructor(props: Object) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick(): void {
    this.setState({
      isLoggedIn: true,
    });
  }

  handleLogoutClick(): void {
    this.setState({
      isLoggedIn: false,
    });
  }

  render(): JSX.Element {
    const isLoggedIn: boolean = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
