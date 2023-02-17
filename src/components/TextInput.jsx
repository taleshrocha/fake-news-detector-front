import { NewsContext } from "@/contexts/NewsContext";
import { useContext, useState } from "react";

export default function TextInput() {
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [text, setText] = useState("");
  const { setNewsContent } = useContext(NewsContext);

  return (
    <div
      className={`
            group relative flex flex-col w-full h-full bg-gray-900 
            overflow-hidden
            text-white border-4 border-gray-800 rounded-lg p-2
            ${
              text.trim().split(" ").length < 8 &&
              isTextAreaFocused &&
              "border-red-600"
            }
        `}
    >
      <span
        className={`
              absolute right-48 -top-4 invisible
              ${text.trim().split(" ").length < 8 && isTextAreaFocused && "!visible"}
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
          if (text.trim().split(" ").length >= 8) setNewsContent(e.target.value);
          else setNewsContent("");
        }}
        onFocus={() => setIsTextAreaFocused(true)}
        onBlur={() => setIsTextAreaFocused(false)}
      />
    </div>
  );
}
