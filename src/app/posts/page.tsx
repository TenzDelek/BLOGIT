import Link from "next/link";
interface Post {
  id: number;
  name: string;
  
}
export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users?limit:10");
  const data = await response.json(); // converting to json
  return (
    <main className="text-center pt-16 px-5">
      <h1 className=" font-bold text-4xl md:text-5xl mb-5">ALL POSTS</h1>
      <ul>
        {data.map((post:Post) => (
          <li key={post.id} className=" mb-2">
            <Link href={`/posts/${post.id}`}>{post.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
