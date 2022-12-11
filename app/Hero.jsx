"use client";

import React from "react";
import code_bg from "../assets/code_bg.jpg";
import Image from "next/image";
import Link from "next/link";

const h = "h-[34vh] lg:h-[62vh]";

function Hero() {
  return (
    <section className={`w-screen ${h}`}>
      <div className="text-white w-[32rem] mt-24 mx-auto">
        <h1 className="text-5xl font-bold">
          Website development made <span className="text-[#ff3471]">easy</span>.
        </h1>
        <p className="font-semibold text-lg mt-4 mb-6">
          JeConsulting is a consulting agency with numerous of highly skilled
          web developers who will do everything in their power to provide you
          with a moderna and fast website.
        </p>
        <Link
          href={"/about"}
          className="px-6 py-2 rounded-sm bg-white font-semibold text-[#244355] hover:scale-105 hover:bg-[#ff3471] hover:text-white duration-150"
        >
          learn more
        </Link>
      </div>
      <div className={`absolute top-[5.7rem] z-[-2] ${h}`}>
        <Image alt="code image" src={code_bg} className="h-full object-cover" />
        <div
          className={`bg-[#244355] w-screen relative bottom-[34vh] lg:bottom-[62vh] opacity-60 ${h}`}
        ></div>
      </div>
      
    </section>
  );
}

export default Hero;
