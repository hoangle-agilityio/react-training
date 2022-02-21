function Welcome(props: { name: string }): JSX.Element {
  return <p>Hello, {props.name}!!</p>;
}

export default function ComposingComponents(): JSX.Element {
  return (
    <>
      <h1>Composing Component</h1>
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    </>
  );
}
