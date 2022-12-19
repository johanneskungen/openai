"use client";

import React from "react";
import axios from "axios";
import { useState } from "react";

function AiComponent() {
  const [answers, setAnswers] = useState("");
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState("");

  const GetAnswers = () => {
    setLoading(true)
    axios
      .post("/api/openai", {
        text: input,
      })
      .then((res) => {
        setAnswers(res)
        setLoading(false)
      });
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        GetAnswers()
      }} className="mx-auto mt-72 gap-3 flex flex-row justify-center items-center w-[85vw]">
        <input placeholder="ask anything you like" className="rounded-sm shadow-lg p-4 mb-6 w-[65vw] text-2xl" value={input} onChange={e => setInput(e.target.value)}/>
        <button className="w-[20vw] hover:scale-105 duration-150 bg-green-500 p-4 rounded-sm shadow-lg mb-6 font-bold text-white text-xl" type="submit">ask question</button>
      </form>
      <div className="w-[85vw] mx-auto bg-white shadow-lg rounded-md text-2xl p-4">
        {loading ? <p className="w-fit mx-auto font-semibold text-3xl">loading...</p> : <code className="aiOutput">{answers.data && answers.data.text}</code>}
      </div>
    </div>
  );
}

export default AiComponent;
