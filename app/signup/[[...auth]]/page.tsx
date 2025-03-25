"use client"
import React from 'react'
import { SignUp } from '@clerk/nextjs'

const page = () => {
  return (
    <div className="pt- flex justify-center mt-10">
      <SignUp signInFallbackRedirectUrl="/create-user"/>
    </div>
  )
}

export default page
