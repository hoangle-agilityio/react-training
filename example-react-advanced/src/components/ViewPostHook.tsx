import { useEffect, useState } from "react";
import { DataSource } from "../hoc/DataSource";
import useData from "./UseData";

export default function ViewPostHook() {
  const post = useData(() => DataSource.getPost(205));

  return (
    <div>
      <p>ID: {post.id}</p>
      <p>Name: {post.name}</p>
      <p>Content: {post.content}</p>
    </div>
  );
}
