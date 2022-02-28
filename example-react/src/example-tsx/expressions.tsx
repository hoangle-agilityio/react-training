interface User {
  firstName: string;
  lastName: string;
};

export default function Expressions(): JSX.Element {
  const user: User = {
    firstName: "Hoang",
    lastName: "Le",
  };

  function formatName(user: User): string {
    return `${user.firstName} ${user.lastName}`;
  }

  return (
    <>
      <h1>Example: Expressions</h1>
      <p className="greeting">Hello, {formatName(user)}!</p>
    </>
  );
}

