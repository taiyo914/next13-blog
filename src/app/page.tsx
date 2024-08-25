import Image from "next/image";
import ArticleList from "./components/ArticleList";
import Aside from "./components/Aside";
import { getAllArticles } from "@/blogAPI";

export default async function Home() {
  const articles = await getAllArticles();
  console.log(articles)

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex-col items-center px-3">
        <ArticleList articles={articles}/>
      </section>
      <Aside/>
    </div>
  );
}
