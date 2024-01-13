import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//Get Single Blog
export const GET = async (req,{ params }) => {
  const { slug } = params;
  try {
    const existingPost = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });
    if (!existingPost) {
      return NextResponse.json("Post not found!", { status: 404 });
    }
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
