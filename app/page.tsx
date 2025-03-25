import About from '@/components/About'
import Hero from '@/components/Hero'
import React from 'react'
import Feutured from '@/components/Feutured'
import Why from '@/components/Why'
import Join from '@/components/Join'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Feutured/>
      <Why/>
      <Join/>
      <Footer/>
    </div>
  )
}

export default page
