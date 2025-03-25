import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className="bg-[url(/newyork.jpg)] h-screen ">
      <div className="h-screen w-full bg-[#00000088]">
        <div className="flex justify-center text-center flex-col items-center h-screen space-y-12">
<h1 className="text-white text-5xl font-bold px-3">Real Estate Investment Oppotunities Designed For You</h1>
<p className="text-white text-2xl px-3">A National Mortgage And Sales Brokerage Since 1995</p>
<div className="flex flex-col md:flex-row gap-6">
    <Button className="text-white bg-blue-500 md:w-[275px] md:h-[60px] text-[16px] font-semibold cursor-pointer">Current Opportunities</Button>
    <Button className="text-white bg-transparent md:w-[324px] md:h-[60px] text-[16px] border border-white cursor-pointer">Learn More About Investing</Button>
</div>
        </div>
      </div>
    </div>
  )
}

export default Hero

