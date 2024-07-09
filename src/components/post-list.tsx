import Link from "next/link";
import React from "react";
interface Post {
  id: number;
  name: string;
}
const Postlist = async () => {
  // await new Promise((resolve)=>setTimeout(resolve,1000));
  //so we stop 1sec and then continue
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?limit:10",
  );
  const data = await response.json(); // converting to json
  return (
    <ul>
      {data.map((post: Post) => (
        <li key={post.id} className=" mb-2">
          <Link href={`/posts/${post.id}`}>{post.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Postlist;
