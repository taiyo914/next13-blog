import Image from "next/image";
import ArticleList from "./components/ArticleList";
import Aside from "./components/Aside";

export default function Home() {
  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex-col items-center px-3">
        <ArticleList />
      </section>
      <Aside/>
    </div>
  );
}
