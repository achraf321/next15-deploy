import { GetPriceId } from "@/lib/plans";
import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId, planType, email } = await req.json();

    if (!planType || !userId || !email) {
      return NextResponse.json({ message: "Credentials required" }, { status: 400 });
    }

    const allowedPlanTypes = ["month", "halfyear", "year"];

    if (!allowedPlanTypes.includes(planType)) {
      return NextResponse.json({ error: "Invalid Plan Type" }, { status: 400 });
    }

    const PriceId = GetPriceId(planType);

    if (!PriceId) {
      return NextResponse.json({ message: "Invalid Price id" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: PriceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      metadata: { userId: userId, planType },
      customer_email: email,
      success_url: `${process.env.STRIPE_BASE_URL}/?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.STRIPE_BASE_URL}/executive`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
  }
}
