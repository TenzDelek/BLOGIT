import React from "react";

export default async function Page({ params }: { params: { id: string } })  {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const data = await response.json();
  return (
    <main className=" pt-28 text-center px-7">
      <h1 className=" text-5xl font-semibold mb-7">{data.title}</h1>
      <p className=" max-w-[700px] mx-auto"> {data.body}</p>
    </main>
  );
};

