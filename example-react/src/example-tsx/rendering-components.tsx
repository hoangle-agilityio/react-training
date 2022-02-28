export default function RenderingComponent(props: { name: string }) {
  return (
    <>
      <h1>Rendering Component</h1>
      <p>Hello, {props.name}!!</p>
    </>
  );
}
