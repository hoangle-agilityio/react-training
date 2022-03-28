import { DataSource } from "../hoc/DataSource";
import useData from "./UseData";

export default function ViewCategoryHook() {
  const category = useData(() => DataSource.getCategory(300));

  return (
    <div>
      <p>ID: {category.id}</p>
      <p>Name: {category.name}</p>
    </div>
  );
}
