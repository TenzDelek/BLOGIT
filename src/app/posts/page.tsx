// import Forms from "@/components/form";
import Postlist from "@/components/post-list";
import { Suspense } from "react";

export default function Posts() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className=" font-bold text-4xl md:text-5xl mb-5">ALL POSTS</h1>
      <Suspense fallback="Loading..........">
        <Postlist />
      </Suspense>
      {/* <Forms/> //we can create here and it will auto refresh when new data are inserted*/}
    </main>
  );
}
