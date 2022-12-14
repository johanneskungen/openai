"use client";

import React from "react";
import code_bg from "../assets/code_bg.jpg";
import Image from "next/image";
import Link from "next/link";

const h = "h-[34vh] sm:h-[38vh] md:h-[62vh]";

function Hero() {
  return (
    <section className={`w-screen ${h}`}>
      <div className="text-white lg:w-[32rem] w-[40rem] mt-60 lg:mt-[8.5rem] mx-auto">
        <h1 className="lg:text-5xl text-8xl font-bold">
          Website development made <span className="text-[#ff3471]">easy</span>.
        </h1>
        <p className="font-semibold lg:text-lg text-3xl mt-4 mb-8 lg:mb-6">
          JeConsulting is a consulting agency with numerous of highly skilled
          web developers who will do everything in their power to provide you
          with a moderna and fast website.
        </p>
        <Link
          href={"/about"}
          className="px-6 py-3 lg:text-lg text-2xl rounded-sm bg-white font-bold text-[#244355] hover:scale-105 hover:bg-[#ff3471] hover:text-white duration-150"
        >
          learn more
        </Link>
      </div>
      <div className={`absolute top-[5.7rem] z-[-2] ${h}`}>
        <Image alt="code image" src={code_bg} className="h-full object-cover" />
        <div
          className={`bg-[#244355] w-screen relative bottom-[34vh] sm:bottom-[38vh] md:bottom-[62vh] opacity-60 ${h}`}
        ></div>
      </div>
      
    </section>
  );
}

export default Hero;
