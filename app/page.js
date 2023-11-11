import CardList from "../components/CardList";
import CategoryList from "../components/CategoryList";
import Featured from "../components/Featured";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <main className="">
      <Featured />
      <CategoryList />
      <div className="flex flex-col md:flex-row gap-3 lg:gap-10 w-full">
        <CardList />
        <Menu />
      </div>
    </main>
  );
}
