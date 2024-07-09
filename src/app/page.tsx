import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      {/* <SignedOut>
        <div className=" w-full text-center justify-center items-center ">
          <p>bro lock in !!</p>
        </div>
      </SignedOut> */}
      {/* <SignedIn> */}
      <h1 className=" font-bold text-4xl md:text-5xl mb-5">
        Welcome to my blog
      </h1>
      <p className=" max-w-[750px] leading-8 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        facilis sint architecto placeat doloremque tempora necessitatibus nam
        cupiditate laborum illo nulla totam culpa, quas labore vero maiores
        minima exercitationem hic!
      </p>
      {/* </SignedIn> */}
    </main>
  );
}
