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
        console.log(res.data.text)
        setLoading(false)
      });
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        GetAnswers()
      }} className="mx-auto mt-24 flex flex-row justify-center items-center w-[38rem]">
        <input placeholder="Ask anything you like" className="rounded-sm shadow-lg p-2.5 m-4 w-[24rem]" value={input} onChange={e => setInput(e.target.value)}/>
        <button className="hover:scale-105 duration-150 bg-green-500 p-2.5 rounded-sm shadow-lg font-bold text-white" type="submit">ask question</button>
      </form>
      <div className="w-[85vw] mx-auto bg-white shadow-lg rounded-md p-4">
        {loading ? <p>loading...</p> : <code className="aiOutput">{answers.data && answers.data.text}</code>}
      </div>
    </div>
  );
}

export default AiComponent;
