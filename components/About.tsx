import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="py-20 ">
      <div className="grid md:grid-cols-2  md:w-[80%] w-full px-6 mx-auto gap-10 ">
<div className="space-y-2">
<h1 className="text-[#0093FF] text-2xl font-semibold">— About</h1>
<p className="text-3xl font-bold">Atlas Limited PartnerShips</p>
<p>When you invest with Atlas, you are more than a number; you are a partner. As a partner with us, you can access opportunities usually reserved only for the largest institutional investors. You can access a team driven only by excellence and results. You can access real estate investment opportunities designed with you in mind.</p>
</div>
<div className="flex items-center">
    <Image src="/team.png" alt='' height={500} width={500}/>
</div>
      </div>
      <p className="h-px w-full bg-gradient-to-r from-white via-[#0093FF] to-white my-4"></p>
    </div>
  )
}

export default About
