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
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
