import React from "react";
import RecentWork from './RecentWork'
import ContactForm from "./ContactForm";
import Hero from "./Hero";

function page() {
  return (
    <div>
      <Hero />
      <RecentWork />
      <ContactForm/>
    </div>
  );
}

export default page;
