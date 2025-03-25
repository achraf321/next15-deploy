import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST (req : NextRequest){
    const body = await req.text()
    const signature = req.headers.get("stripe-signature") 

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

    let event : Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
          body,
          signature || "",
          webhookSecret,
        )
    } catch (error : any) {
        return NextResponse.json({message : error.message} , {status : 400})
    }

    switch(event.type) {
        case "checkout.session.completed" : {
            const session = event.data.object as Stripe.Checkout.Session
            await handleCheckoutSessionCompleted(session)
        };
    }
    return NextResponse.json({received : true} , {status : 200})
}


async function handleCheckoutSessionCompleted(session : Stripe.Checkout.Session){
const userId = session.metadata?.userId
if(!userId) {
    console.log("No User Id")
    return
}

console.log("THe User Id is :" + userId)


const subid = session.subscription as string
if(!subid){
    console.log("No Sub Id")
    return
}

try {
const user = await prisma.user.update({
        where : {userId : userId},
        data : {
            subscriptionActive : true
        } 
    })
console.log("Updated User" , user)

} catch (error: any) {
    return NextResponse.json({message : error.message} , {status : 500})
}
}
