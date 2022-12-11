import React from "react";
import { XataClient } from "../util/xata";
import Link from "next/link";
import Image from "next/image";
import google from '../assets/google.png'
import amazon from '../assets/amazon.png'
import calc from '../assets/calcu.png'

const images = [
  amazon,
  google,
  calc
]

const xata = new XataClient();

const getXata = async () => {
  const blogs = await xata.db.blogs.getAll();
  return blogs;
};

const checkIfToLong = (body) => {
  if (body.split("").length > 41) {
    return body.slice(0, 41) + "...";
  }
};

const dateFixer = (date) => {
  return date.toString().split("T")[0]
}

async function RecentWork() {
  const blogs = await getXata();
  return (
      <main id="work" className="w-[80vw] mx-auto mb-24">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Recent Work</h1>
          <p className="italic">Sorted most recent</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-3 mt-6">
          {blogs.reverse().map((work, index) => (
            <div
              key={work.id}
              className="flex flex-col justify-between shadow-md min-h-[18rem] max-h-[26rem] p-3.5 rounded-lg bg-white"
            >
              <div className="h-full border flex items-center">
                <Image alt="recent work" src={images[index]} className="w-72 mx-auto"/>
              </div>
              <div>
                <Link href={"/" + work.id} className="font-semibold text-lg">
                  {work.title}
                </Link>
                <p>{checkIfToLong(work.body)}</p>
                <p className="italic">{dateFixer(work.date)}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
  );
}

export default RecentWork;
