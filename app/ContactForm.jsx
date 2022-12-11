import React from "react";

function ContactForm() {
  return (
      <main id="contact" className="flex justify-center w-[85vw] gap-6 mx-auto rounded-sm shadow-lg mb-44 p-2 bg-white text-[#1b2735]">
        <section className="w-96 p-4 self-center">
            <h1 className="font-semibold text-lg">Communication Is Key</h1>
            <p className="pt-4 pb-10">If you have any further questions, do not hesitate to contact us with the form next to this text. We will get back to you within 24 hours. Hopefully we can make some great things together!</p>
            <p className="italic">Best Regards JeConsulting</p>
        </section>
        <section>
            <form className="flex flex-col mt-4 gap-6 p-4">
                <input className="p-2 rounded-sm border" placeholder="Full Name"/>
                <textarea rows={4} className="p-2 border w-72 rounded-sm" placeholder="Message"></textarea>
                <input className="p-2 rounded-sm border" placeholder="Email"/>
                <button className="hover:scale-105 duration-150 font-bold rounded-sm shadow-md bg-[#1b2735] text-white h-10">
                    send message
                </button>
            </form>
        </section>
      </main>
  );
}

export default ContactForm;