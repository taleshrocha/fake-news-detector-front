import { useEffect, useRef, useState } from "react";
import { FaRegPaperPlane as PlaneIcon } from "react-icons/fa";

export default function TextInput() {
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [text, setText] = useState("");

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  }

  function sendNews() {
    postData("http://localhost:8080/news/base/true", { content: text });
    if (text.trim() === "") {
    } else setText("");
  }

  return (
    <div
      className={`
          group relative flex flex-col w-full h-full bg-gray-900 
          overflow-hidden
          text-white border-4 border-gray-800 rounded-lg p-2
          ${text.split(" ").length < 8 && isTextAreaFocused && "border-red-600"}
      `}
    >
      <span
        className={`
            absolute right-48 -top-4 invisible
            ${text.split(" ").length < 8 && isTextAreaFocused && "!visible"}
        `}
      >
        <span
          className={`
              fixed text-red-500 bg-gray-900 px-2
          `}
        >
          Add more words
        </span>
      </span>
      <textarea
        className="
           resize-none w-full h-full text-white bg-inherit outline-none border-transparent focus:border-transparent focus:ring-0 
        "
        placeholder="Add your news here"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onFocus={() => setIsTextAreaFocused(true)}
        onBlur={() => setIsTextAreaFocused(false)}
      />
      <button
        className={`
            flex items-center justify-center absolute bottom-4 right-4 w-10 h-10 
            p-2 bg-gray-800 rounded-full
            transition-all duration-500 ease-out
            translate-y-14 translate-x-14 border-2 border-emerald-700
            hover:translate-y-0 hover:translate-x-0
            ${
              text.split(" ").length >= 8 &&
              !isTextAreaFocused &&
              "!translate-y-0 !translate-x-0"
            }
`}
        onClick={sendNews}
      >
        <PlaneIcon size={100} className="text-emerald-700 " />
      </button>
    </div>
  );
}
