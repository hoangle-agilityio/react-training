interface Comment {
  author: {
    avatarUrl?: string;
    name?: string;
  };
  text?: string;
}

function Avatar(props: Comment) {
  return <img width="30" className="Avatar"
    src={props.author.avatarUrl}
    alt={props.author.name}
  />
}

function UserInfo(props: Comment) {
  return (
    <>
      <Avatar author={props.author} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </>
  );
}

export default function Comment() {
  const comment: Comment = {
    author: {
      avatarUrl: "/src/logo.svg",
      name: "Hoang",
    },
    text: "Extracting Components",
  }

  return (
    <div className="Comment">
      <div className="UserInfo">
        <UserInfo author={comment.author} />
      </div>
      <div className="Comment-text">
        {comment.text}
      </div>
    </div>
  );
}
