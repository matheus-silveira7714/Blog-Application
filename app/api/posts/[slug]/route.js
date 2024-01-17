import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//Get Single Blog
export const GET = async (req, { params }) => {
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
    console.log(err.message);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

// Update a Single Post
export const PUT = async (req, { params }) => {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json("Not Authenticated", { status: 401 });
  }
  try {
    const { title, desc, image, catSlug, updatedAt, slug } = await req.json();
    const existingPost = await prisma.post.findFirst({
      where: { slug: params.slug, userEmail: session.user.email },
    });
    if (!existingPost) {
      return NextResponse.json("Post not found", { status: 404 });
    }
    const updatedPost = await prisma.post.update({
      where: { id: existingPost.id },
      data: { title, desc, image, catSlug, updatedAt, slug },
      include: { user: true },
    });
    return NextResponse.json(updatedPost, { status: 200 });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};

// Delete a blog
export const DELETE = async (req, { params }) => {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json("Not Authenticated", { status: 401 });
  }
  try {
    const { slug } = params;
    const post = await prisma.post.findFirst({
      where: { slug, userEmail: session.user.email },
    });
    if (!post) {
      return NextResponse.json("Post not found!", { status: 404 });
    }
    await prisma.$transaction([
      prisma.comment.deleteMany({ where: { postSlug: slug } }),
      prisma.post.delete({ where: { slug, userEmail: session.user.email } }),
    ]);
    return NextResponse.json("Post deleted successfully", { status: 200 });
  } catch (err) {
    console.log(err.message);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
