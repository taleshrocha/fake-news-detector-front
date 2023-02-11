import { NewsContext } from "@/contexts/NewsContext";
import { useContext, useState } from "react";

export default function Slider() {
  const [value, setValue] = useState(70);
  const { setTrustThreshold } = useContext(NewsContext);
  return (
    <div className="flex flex-col font-bold text-white w-full">
      <h1>Trust threshold: {value}%</h1>
      <div className="flex space-x-2 w-full">
        <input
          className="flex-1 input-slider input-track input-thumb w-3/2"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className={`
            flex items-center justify-center w-10 h-10 
            p-2 bg-gray-800 rounded-full
            transition-all duration-500 ease-out
            border-2 border-emerald-700
          `}
          onClick={() => setTrustThreshold(value)}
        >
          Set
        </button>
      </div>
    </div>
  );
}
