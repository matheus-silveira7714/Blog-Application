import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Get All Comments
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");
  try {
    const comments = await prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

// Add Single Comment
export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json("Not Authenticated", { status: 401 });
  }
  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });
    return NextResponse.json(comment, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
