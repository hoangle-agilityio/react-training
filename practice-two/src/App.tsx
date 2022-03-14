import { useContext } from "react";
import "./App.css";
import UserList from "./components/UserList";
import { UserContext } from "./contexts/UserContext";

export default function App(): JSX.Element {
  const { userList } = useContext(UserContext);

  return (
    <div className="app">
      <h1 className="app__heading">User Management</h1>
      <UserList resultList={userList} />
    </div>
  );
}
