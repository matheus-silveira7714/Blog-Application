import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//Get Popular Blogs
export const GET = async (req) => {
  try {
    const posts = await prisma.post.findMany({
      take: 6,
      orderBy: { views: "desc" },
      include: { user: true },
    });
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
