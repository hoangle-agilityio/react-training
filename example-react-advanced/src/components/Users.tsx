import { MutableRefObject, useRef, useState } from "react";
import useSWR from "swr";

export interface User {
  id?: number;
  name: string;
}

const apiUrl = "http://localhost:3000/users";

const addUser = async (data: User): Promise<User> => {
  const response: Response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  return response.json();
}

export default function Users() {
  const [pageIndex, setPageIndex] = useState(0);

  const userNameRef = useRef() as MutableRefObject<HTMLInputElement>;

  const { data, error } = useSWR<User[]>(`http://localhost:3000/users?_start=${pageIndex * 3}&_end=${pageIndex * 3 + 3}`);

  const handleAddUser = async (userData: User) => {
    try {
      await addUser(userData);
    } catch (error) {
      throw new Error(`Get data failed: ${error}`);
    }
  }

  const handleSubmitUser = () => {
    const userData: User = {
      name: userNameRef.current.value,
    }

    handleAddUser(userData);
  }

  if (error) return <div>Something Error!!</div>;

  if (!data || data.length === 0) return <div>Loading...</div>

  return (console.log(pageIndex),
    <div>
      <input type="text" ref={userNameRef} />
      <button onClick={handleSubmitUser}>Add</button>
      <h2>List</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
}
