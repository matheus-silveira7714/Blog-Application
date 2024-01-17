import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import ShareButton from "@/components/ShareButton";
import { getPlainText } from "@/utils/helper";
import { format } from "date-fns";
import Image from "next/image";

const getData = async (slug) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
      cache: "no-cache",
    });
    const data = await res.json();
    if (res.ok) return data;
    else throw new Error(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blog = await getData(slug);
  return {
    title: blog?.title,
    description: getPlainText(blog?.desc?.substring(0, 100) || ""),
    openGraph: {
      title: blog?.title,
      description: blog?.desc?.substring(0, 100),
      url: `${process.env.NEXTAUTH_URL}/blogs/${slug}`,
      type: "article",
      authors: [blog?.user?.name],
      images: [blog?.image],
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.title,
      description: getPlainText(blog?.desc?.substring(0, 100) || ""),
      images: [blog?.image],
    },
  };
}

const page = async ({ params }) => {
  const { slug } = params;
  const blog = await getData(slug);
  return (
    <>
      <div className="w-full">
        <div className="flex w-full flex-col-reverse sm:flex-row sm:items-center gap-4 lg:gap-4 xl:gap-10 lg:pt-4">
          <div className="flex-1 flex flex-col lg:flex-col gap-5 sm:gap-3 lg:gap-7 xl:gap-10">
            <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-4xl font-semibold">
              {blog.title}
            </h1>
            <div className="flex flex-col gap-4 sm:gap-3 lg:gap-4">
              <div className="flex gap-3 items-center">
                <div className="h-12 w-fit sm:h-10 lg:h-12">
                  <Image
                    src={blog.user?.image}
                    alt={blog.user?.name}
                    width={12}
                    height={12}
                    className="object-cover object-center border-2 border-gray-200 rounded-full w-full h-full brightness-150 saturate-100 contrast-200"
                  />
                </div>
                <div className="flex flex-col softText">
                  <span className="font-bold textColor sm:text-sm lg:text-base">
                    {blog?.user?.name}
                  </span>
                  <span className="text-sm font-medium">
                    {blog?.updatedAt
                      ? "Edited on " + format(new Date(blog?.updatedAt), "dd MMMM, yyyy")
                      : "Posted on " + format(new Date(blog?.createdAt), "dd MMMM, yyyy")}
                  </span>
                </div>
              </div>
              <div className="flex flex-col lg:items-center lg:flex-row gap-5 sm:gap-3 lg:gap-3 xl:gap-10 ">
                <div className="flex items-center gap-10 lg:gap-5 xl:gap-10 sm:text-sm xl:text-base">
                  <span className="font-medium w-fit">{blog?.views} views</span>
                  <span
                    className={`capitalize font-medium lg:text-lg w-fit rounded-full py-1 px-5 text-white popular-${blog.catSlug}`}
                  >
                    {blog.catSlug}
                  </span>
                </div>
                <ShareButton />
              </div>
            </div>
          </div>
          <div className="flex-1 mt-3 sm:mt-0 sm:h-[225px] lg:h-[325px] group overflow-hidden rounded-xl ">
            <Image
              src={blog?.image}
              alt={blog?.title}
              width={275}
              height={250}
              className="object-cover object-center w-full h-full rounded-xl group-hover:scale-105 transition-all duration-500 ease-in cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <div className="flex-1 lg:mt-9">
            <div
              className="flex flex-col text-lg textColor"
              dangerouslySetInnerHTML={{ __html: blog?.desc || "" }}
            />
            <div className="mt-3">
              <Comments postSlug={slug} />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
};

export default page;
