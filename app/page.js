import CategoryList from "../components/CategoryList";
import Featured from "../components/Featured";
import Menu from "../components/Menu";
import RecentPosts from "../components/PostList";

export default function Home({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <main className="">
      <Featured />
      <CategoryList />
      <div className="flex flex-col md:flex-row gap-3 lg:gap-10 w-full">
        <RecentPosts page={page} />
        <Menu />
      </div>
    </main>
  );
}
