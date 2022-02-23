function FancyBorder(props: any) {
  return (
    <div className={`fancy fancy-${props.color}`}>
      {props.children}
    </div>
  );
}

export function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

function Contacts() {
  return (
    <div className="Contacts">
      <h2>Contacts</h2>
    </div>
  );
}

function Chat() {
  return (
    <div className="Chat">
      <h2>Chat</h2>
    </div>
  );
}

function SplitPane(props: any) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

export function App() {
  return (
    <SplitPane left={<Contacts />} right={<Chat />} />
  );
}
