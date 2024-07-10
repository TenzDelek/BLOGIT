import Upvote from "@/components/upvote";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/users/${params.id}`,
  // );
  // const data = await response.json();

  const data = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!data) {
    notFound();
  }
  return (
    <main className=" pt-28 text-center px-7">
      <h1 className=" text-5xl font-semibold mb-7">{data?.title}</h1>
      <p className=" max-w-[700px] mx-auto"> {data?.body}</p>

      <Upvote />
    </main>
  );
}
