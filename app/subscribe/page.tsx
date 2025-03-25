"use client"
import React from 'react'
import { AvailablePlans } from '@/lib/plans'
import { Card,
CardHeader,
CardTitle,
CardDescription,
CardContent,} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import toast from "react-hot-toast"

interface SubscribeResponse {
  url : string
}


async function handleData (userId : string , email : string , planType : string):Promise<SubscribeResponse> {
  const response = await fetch("/api/checkout",
    {method : "POST",
      headers : {
        "Content-type" : "application/json"
      },
      body : JSON.stringify({
        planType,
        email ,
        userId ,
      })
    })
    if(!response) {
      throw new Error("Somthing went wrong")
    }

    const data = await response.json()
    return data
}


const Page = () => {

  const {user} = useUser()
const router = useRouter()

const userId = user?.id;
const email = user?.emailAddresses[0].emailAddress || "" ;

  const {mutate , isPending} = useMutation<SubscribeResponse , Error ,{planType : string}>({
    mutationFn :  async ({planType}) => {
      if(!userId){
        throw new Error("You must be signed in to subscribe to a plan")
      }

      return handleData(userId , email , planType)
    },
    onSuccess : (data) => {
      window.location.href = data.url
    },
    onError : () => {
      toast.error("Error Happened")
    }
  })

function handleSubscribe(planType : string) {
  if(!userId){
    router.push("/signup")
    return
  }

  mutate({planType})
}

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-semibold text-center my-10">Plans Available</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{AvailablePlans.map((plan, index) => (
<Card key={index} className="flex flex-col justify-between relative">
  {plan.isPopular && <p className="absolute right-10 -top-4 bg-black text-white rounded-md px-2 outline outline-black outline-offset-1">Most Popular</p>}
<CardHeader>
  <CardTitle>
    {plan.title}
  </CardTitle>
  <CardDescription>
    <p className="text-2xl font-semibold">{plan.price}<span className="text-lg text-black font-semibold"> / {plan.interval}</span></p>
  </CardDescription>
</CardHeader>
<CardContent>
  <p className="py-2">{plan.description}</p>
  {plan.features.map((feature , idx) => (
    <p key={idx}>- {feature}</p>
  ))}
</CardContent>
<Button onClick={() => handleSubscribe(plan.interval)} disabled={isPending} className="mx-4 cursor-pointer">Buy Now</Button>
</Card>
))}
      </div>
    </div>
  )
}

export default Page
