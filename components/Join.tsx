import React from 'react'

const Join = () => {
  return (
<div>
<div className="py-20 grid grid-cols-1 lg:grid-cols-2 px-6 md:px-26 gap-15">
<div className="space-y-5">
<h1 className="text-2xl font-bold">Join Our Email List Now And Get <br/> A Free Industry eBook</h1>
   <div className="flex gap-6 w-full">
   <div className="flex flex-col w-1/2">
        <label htmlFor="firstname">First Name</label>
        <input type="text" id='firstname'
        placeholder='First Name'
className="bg-gray-100 p-3 rounded-md w-full"
        />
      </div>
      <div className="flex flex-col w-1/2">
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id='fullname'
        placeholder='Last Name'
className="bg-gray-100 p-3 rounded-md w-full"
        />
      </div>
   </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="email" id='email'
        placeholder='Ex Mike2025@test.com'
        className="bg-gray-100 p-3 rounded-md"
        />
      </div>
      <p>Are You An Acceredited Anvestor ?</p>
   <div className="flex gap-10">
   <div className="flex gap-3 items-center">
        <label htmlFor="yes">Yes</label>
        <input type="radio" name="option" id='yes'
        className=""
        />

      </div>
      <div className="flex gap-3 items-center">
        <label htmlFor="no">No</label>
        <input type="radio" name="option" id='no'
        className=""
        />
        
      </div>
   </div>
      <div>
        <p className="pb-2">How Did You Hear About Us ?</p>
        <textarea name="" id="" 
        placeholder='type here your message'
        className="bg-gray-100 w-full p-3 rounded-md h-44"

        ></textarea>
      </div>
      <button className="bg-[#0093FF] text-white rounded-md w-full h-15 cursor-pointer">Join Mailing List</button>
</div>
<div>
<img src="/book.png" alt="" />
<div className="">
  <div className="grid grid-cols-2 gap-6">
<div className="leading-8">
<span>1) Benefits of investing in real estate during uncertain times</span><br/>
 <span>2) Tax advantages of investing</span><br/>
<span> 3) Active Vs. Passive Investing </span><br/>
<span> 4) How Limited Partnerships work </span><br/>
<span> 5) How to find deals that are recession</span>
</div>
<div className="leading-8">
  <span>6) Markets that are recession resilient</span><br/>
 <span>  7) How to Analyze deals in a rising interest rate environment </span><br/>
  <span> 8) The common mistakes real estate investors make when searching for deals to invest in</span>
  </div>
  </div>
</div>
</div>
    </div>
    <div className="bg-blue-500 w-[90%] mx-auto rounded-md p-4 text-center my-12 space-y-3">
<h1 className="text-white font-bold text-3xl">Ready To Invest ?</h1>
<button className="text-white border cursor-pointer border-white rounded-md px-4 py-2">View Current Opportunities</button>
</div>
</div>
  )
}

export default Join

