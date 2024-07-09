import { createpostla } from "@/actions/actions";
const CreatePost = () => {
  return (
    <main className=" text-center pt-16">
      <h1 className=" text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <form action={createpostla} className=" h-10 space-x-2 mt-10">
        <input
          required
          placeholder=" title for new post"
          name="title"
          type="text"
          className=" outline-none border rounded px-3 h-full"
        />
        <textarea name="body" className=" border rounded px-1 h-full" placeholder="Body for new post"/>
        <button className=" h-full px-2  py-1 text-sm rounded bg-green-500 text-white">
          Submit
        </button>
      </form>
    </main>
  );
};

export default CreatePost;
