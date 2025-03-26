import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';


const footerlinks = [
    {id : 1 , title : "FAQs" , link : "faq"},
    {id : 2 , title : "Disciosures" , link : "faq"},
    {id : 3 , title : "Terms And Condition" , link : "faq"},
    {id : 4 , title : "Privacy Policy" , link : "faq"},
    {id : 5 , title : "Submit Deals" , link : "faq"},
    {id : 6 , title : "Media Kit" , link : "faq"},
]

const Footer = () => {
  return (
    <div className="bg-[#161B1F] p-6 px-5 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-4"> 
<div className="text-white pr-10">
<h1 className="font-semibold text-xl">Contact</h1>
<div className="space-y-4 pt-2">
<p className="flex items-center gap-4"><FaPhone size={20} className="min-h-[20px] min-w-[20px]"/> +1 215 456-7890</p>
<p className="flex items-center gap-4"><MdEmail size={23} className="min-h-[20px] min-w-[19px]"/> Invest@AtislPS.Com</p>
<p className="flex items-center gap-4"><IoLocationSharp size={32} className="min-h-[20px] min-w-[23px]"/> 501 West Broadway,Suite 800, San Diego, CA 921001</p>
</div>
</div>
<div className="text-white">
<h1 className="font-semibold text-xl">Links</h1>
<ul className="">
    {footerlinks.map((link) => (
        <li key={link.id} className="py-0.5"><Link href="">{link.title}</Link></li>
    ))}
</ul>
</div>
<div className="col-span-2 text-white mt-4">
<h1 className="font-semibold text-xl">Investment Disclosure</h1>
<p className="leading-7">When you invest with Atlas, you are more than a number; you are a partner. As a partner with us, you can access opportunities usually reserved only for the largest institutional investors. You can access a team driven only by excellence and results. You can access real estate investment opportunities designed with you in mind.</p>
</div>
      </div>
 <div className="flex justify-center my-4">
 <div className="flex items-center gap-6">
        <Image src="/logo.png" alt="" height={70} width={70}></Image>
        <p className="text-white">ATLAS 2022 @ All Right Reserved</p>
      </div>
 </div>
    </div>
  )
}

export default Footer
