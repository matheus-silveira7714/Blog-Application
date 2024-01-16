import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json("Not Authenticated", { status: 401 });
  }
  const query = {
    where: { userEmail: session.user.email },
    orderBy: { createdAt: "desc" },
  };
  try {
    const posts = await prisma.post.findMany(query);
    if (posts.length === 0) {
      return NextResponse.json("Posts not found!", { status: 404 });
    }
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
