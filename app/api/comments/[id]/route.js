import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Update a Single Comment
export const PUT = async (req, { params }) => {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }
  try {
    const { id } = params;
    const { desc } = await req.json();
    const existingComment = await prisma.comment.findFirst({
      where: { id, userEmail: session.user.email },
    });
    if (!existingComment) {
      return NextResponse.json(
        { message: "Comment not found or unauthorized" },
        { status: 404 }
      );
    }
    const updatedComment = await prisma.comment.update({
      where: { id },
      data: { desc },
    });
    return NextResponse.json(updatedComment, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

// Delete a Single Comment
export const DELETE = async (req, { params }) => {
  const session = await getAuthSession();
  if (!session) {
    return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
  }
  try {
    const { id } = params;
    const existingComment = await prisma.comment.findFirst({
      where: { id, userEmail: session.user.email },
    });
    if (!existingComment) {
      return NextResponse.json(
        { message: "Comment not found or unauthorized" },
        { status: 404 }
      );
    }
    const deletedComment = await prisma.comment.delete({
      where: { id },
    });
    return NextResponse.json(deletedComment, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
