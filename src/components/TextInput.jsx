import { useEffect, useRef, useState } from "react";
import { FaRegPaperPlane as PlaneIcon } from "react-icons/fa";

export default function TextInput() {
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(true)
  return (
    <div
      className="relative flex flex-col w-full h-full bg-gray-900 
          overflow-hidden
          text-white border-4 border-gray-800 rounded-lg p-2"
    >
      <textarea
        className="
        resize-none w-full h-full text-white bg-inherit outline-none
        "
        placeholder="Add your news here"
        onFocus={() => setIsTextAreaFocused(false)}
        onBlur={() => setIsTextAreaFocused(true)}
      />
      <button
        className={`
            flex items-center justify-center absolute bottom-4 right-4 w-10 h-10 
            p-2 bg-gray-800 rounded-full
            transition-all duration-500 ease-out
            translate-y-14 translate-x-14 border-2 border-emerald-700
            ${isTextAreaFocused && "translate-y-0 translate-x-0"}
`}
      >
        <PlaneIcon size={100} className="text-emerald-700 " />
      </button>
    </div>
  );
}
