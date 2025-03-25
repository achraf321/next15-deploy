import React from 'react'
import Cardo from './Cardo'
import { Button } from './ui/button'

const Why = () => {
  return (
    <div className="min-h-screen my-20">
      <div className="text-center space-y-3 px-12">
        <div className="flex items-center justify-center space-x-2">
        <span className="h-1 w-4 bg-gradient-to-r from-white to-blue-500"></span>
        <h1 className="font-semibold text-2xl text-[#0093FF]">Why</h1>
        <span className="h-1 w-4 bg-gradient-to-l from-white to-blue-500"></span>
        </div>
        <p className="text-gray-800 text-3xl font-bold">Atlas Limited Partnerships</p>
        <p className="text-gray-500">We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail, multi-family and office buildings investment opportunities.</p>
      </div>
<div className="w-full flex justify-center my-20">
<div className="w-[90%] flex flex-wrap gap-6 justify-center">
        <div>
        <Cardo />
        </div>
        <div>
        <Cardo />
        </div>
        <div>
        <Cardo />
        </div>
        <div>
        <Cardo />
        </div>
        <div>
        <Cardo />
        </div>
        <div>
        <Cardo />
        </div>
      </div>
</div>
<div className="w-full flex flex-col md:flex-row justify-center gap-4 px-20">
<Button className="text-white bg-blue-500 md:w-[275px] md:h-[60px] text-[16px] font-semibold cursor-pointer">Current Opportunities</Button>
<Button className="text-blue-500 border border-blue-500 bg-transparent md:w-[324px] md:h-[60px] text-[16px] cursor-pointer">Learn More About Investing</Button>
</div>
<p className="h-px w-full bg-gradient-to-r from-white via-[#0093FF] to-white my-4"></p>
    </div>
  )
}

export default Why
