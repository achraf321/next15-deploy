import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return NextResponse.json({ message: "User Not Found" }, { status: 404 });
    }

    const name = clerkUser?.emailAddresses[0].emailAddress.slice(0, 7) || "";
    const email = clerkUser?.emailAddresses[0].emailAddress;

    if (!email) {
      return NextResponse.json({ message: "User Does Not Have An Email" }, { status: 400 });
    }

    const existingProfile = await prisma.user.findUnique({
      where: { userId: clerkUser?.id },
    });

    if (existingProfile) {
      return NextResponse.json({ message: "Profile Already Exists" });
    }

    await prisma.user.create({
      data: {
        name: name,
        userId: clerkUser?.id,
        email,
        subscriptionActive: false,
      },
    });

    return NextResponse.json({ message: "Profile Created Successfully" }, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      
      console.error(error.message);
      return NextResponse.json({ error: error.message || "Failed Creating Profile" }, { status: 500 });
    }
 
    return NextResponse.json({ error: "Failed Creating Profile" }, { status: 500 });
  }
}
