import { memo } from "react";
import User from "../../core/interfaces/user";
import Button from "../Button";
import "./user-list.css";

interface UserListProps {
  resultList: Array<User>;
}

function UserList({ resultList }: UserListProps) {
  return (
    <section>
      <table className="user-list">
        <thead>
          <tr>
            <th className="list-head">User Id</th>
            <th className="list-head">Name</th>
            <th className="list-head">Email</th>
            <th className="list-head">Action</th>
          </tr>
        </thead>
        <tbody>
          {resultList.length === 0 ? (
            <tr>
              <td className="empty-item">No data found!</td>
            </tr>
          ) : (
            <>
              {resultList.map(user => (
                <tr key={user.id}>
                  <td className="list-item">{user.id}</td>
                  <td className="list-item">{user.name}</td>
                  <td className="list-item">{user.email}</td>
                  <td className="list-item">
                    <Button
                      buttonName="Edit"
                      className="button-edit"
                    />

                    <Button
                      buttonName="Delete"
                      className="button-delete"
                    />
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default memo(UserList);
