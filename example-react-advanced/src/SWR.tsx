import { SWRConfig } from "swr";
import Users from "./components/Users";

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((response) => response.json());

export default function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <Users />
    </SWRConfig>
  );
}
