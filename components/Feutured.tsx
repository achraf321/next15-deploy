"use client"; // Client component

import React from "react";
import { motion } from "framer-motion";

const logos: string[] = [
  "be1.png",
  "be2.png",
  "be3.png",
  "be4.png",
  "be5.png",
];

const Feutured = () => {
  return (
    <div className="overflow-hidden py-10 bg-white">
      <h1 className="text-4xl font-bold text-center mb-10">Featured In</h1>
      
      {/* Outer wrapper */}
      <div className="relative w-full flex overflow-hidden shadow-md py-5 border-b border-gray-gradient-to-r from-white via-black to-white">
        {/* Motion Div */}
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {/* Duplicate logos for smooth looping */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index}`}
              className="h-6 w-auto"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Feutured;



