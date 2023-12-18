import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//Get Featured Blog
export const GET = async (req) => {
  try {
    const post = await prisma.post.findFirst({
      orderBy: { views: "desc" },
      include: { user: true },
    });
    if (!post) {
      return NextResponse.json(
        { error: "Featured Post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
