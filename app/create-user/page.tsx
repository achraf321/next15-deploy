"use client"
import { useUser } from '@clerk/nextjs'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

async function GetProfile() {
    const response = await fetch("/api/create-user", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        }
    })

    const data = await response.json()
    return data
}

const Page = () => {
    const { isSignedIn, isLoaded } = useUser()
    const router = useRouter()
    const { mutate, isPending } = useMutation({
        mutationFn: GetProfile,
        onSuccess: () => {
            router.push("/executive")
        },
        onError: (error) => {
            console.log(error)
        }
    })

    useEffect(() => {
        if (isLoaded && isSignedIn && !isPending) {
            mutate()
        }
    }, [isLoaded, isSignedIn, isPending , mutate])  // Added isPending to the dependency array

    return (
        <div>
            Processing Sign In ...
        </div>
    )
}

export default Page

