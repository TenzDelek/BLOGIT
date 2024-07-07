import Postlist from "@/components/post-list";
import { Suspense } from "react";

export default async function Posts() {

  return (
    <main className="text-center pt-16 px-5">
      <h1 className=" font-bold text-4xl md:text-5xl mb-5">ALL POSTS</h1>
      <Suspense fallback="Loading..........">
      <Postlist/>
      </Suspense>
      
    </main>
  );
}
