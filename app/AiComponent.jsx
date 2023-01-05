import React from "react";
import axios from "axios";
import { useState } from "react";
import { useAiContext } from "./Context";
import { toast, Toaster } from "react-hot-toast";

function AiComponent() {
  const { setAiResponses, setSidebarOpen, aiResponses } = useAiContext();
  const [answers, setAnswers] = useState("");
  const [input, setInput] = useState("");

  const GetAnswers = () => {
    axios
      .post("/api/openai", {
        text: input,
      })
      .then((res) => {
        setAnswers(res);
      });
  };

  const saveResponse = (res) => {
    setInput("");
    const localstorage = window.localStorage.getItem("responses")
    if(!localstorage){
      res &&
      setAiResponses((prev) =>
        prev ? [...prev, res.data.text] : [res.data.text]
      );
      window.localStorage.setItem("responses", JSON.stringify([...aiResponses, res.data.text]))
      toast.success("Response saved successfully")
    } else{
      const items = JSON.parse(window.localStorage.getItem("responses"))
      res && window.localStorage.setItem("responses", JSON.stringify([...items, res.data.text]))
      toast.success("Response saved successfully")
    }
  };

  return (
    <div onClick={() => setSidebarOpen(false)} className="sm:mt-[13rem]">
      <h1 className="mb-44 sm:mb-12 text-8xl sm:text-7xl lg:text-6xl font-bold text-center text-red-500">
        Ask about our future
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          GetAnswers();
        }}
        className="mx-auto gap-3 flex flex-row justify-center items-center lg:w-[65vw] w-[85vw]"
      >
        <input
          placeholder="type your question"
          className="bg-black text-white rounded-md shadow-lg px-4 mb-6 w-[65vw] lg:w-[47.5vw] sm:text-xl sm:h-16 h-24 text-3xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="w-[20vw] hover:scale-105 lg:w-[17.5vw] duration-150 bg-black p-4 sm:rounded-md rounded-sm shadow-lg mb-6 font-bold text-white sm:h-16 sm:text-lg text-2xl h-24"
          type="submit"
        >
          ask question
        </button>
      </form>
      <div className="w-[85vw] lg:w-[65vw] mx-auto bg-black shadow-lg rounded-md text-2xl p-4">
        <button
          className="bg-red-500 text-white font-semibold px-4 py-1 rounded-sm shadow-md"
          onClick={() => saveResponse(answers)}
        >
          save
        </button>
          {answers && <code className="aiOutput text-2xl sm:text-xl">{answers.data && answers.data.text}</code>}
      </div>
      <Toaster position="top-center" reverseOrder={false}/>
    </div>
  );
}

export default AiComponent;
