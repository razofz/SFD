import Header from "@/app/header";
import { Form } from "@/app/forms";

import "@/app/global.css";
import { lusitana } from "@/app/fonts";
import Link from "next/link";

export default async function SelectDataFormatPage() {
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();

  return (
    <div className="flex flex-col">
      <Header title="SFD" />
      <main className="flex flex-col min-h-screen justify-center items-center">
        <h1 className={`${lusitana.className} flex my-5`}>Upload</h1>
        <div className="flex place-items-center">
          <Form className="flex" />
        </div>
        {/* <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul> */}
      </main>
    </div>
  );
}
