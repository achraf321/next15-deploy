import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Missing User Id" }, { status: 400 });
    }

    const profile = await prisma.user.findUnique({
      where: { userId },
      select: {
        subscriptionActive: true,
      },
    });

    return NextResponse.json({ subscriptionActive: profile?.subscriptionActive });
  } catch (error: unknown) {
  
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
}

