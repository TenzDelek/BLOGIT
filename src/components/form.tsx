import { createpostla } from "@/actions/actions";
import React from "react";

const Forms = () => {
  return (
    <form
      action={createpostla}
      className=" mx-auto space-y-4 max-w-[400px] flex flex-col  my-10"
    >
      <input
        required
        placeholder=" title for new post"
        name="title"
        type="text"
        className=" outline-none border rounded px-3 h-10"
      />
      <textarea
        name="body"
        required
        className=" py-2 outline-none border rounded px-3"
        placeholder="Body for new post"
        rows={6}
      />
      <button className="  h-10  px-2  py-1 text-sm rounded bg-green-500 text-white">
        Submit
      </button>
    </form>
  );
};

export default Forms;
