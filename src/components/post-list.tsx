import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";
interface Post {
  id: number;
  name: string;
}
const Postlist = async () => {
  // await new Promise((resolve)=>setTimeout(resolve,1000));
  //so we stop 1sec and then continue

  //for api call
  // const response = await fetch(
  //   "https://jsonplaceholder.typicode.com/users?limit:10",
  // );
  // const data = await response.json(); // converting to json

  const data = await prisma.post.findMany();
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id} className=" mb-2">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Postlist;
