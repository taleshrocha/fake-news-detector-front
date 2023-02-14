import { NewsContext } from "@/contexts/NewsContext";
import { useContext, useState } from "react";

export default function Slider() {
  const [value, setValue] = useState(70);
  const { setTrustThreshold, algoValues, setAlgoValues } = useContext(NewsContext);

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
      <div className="flex space-x-4 justify-center items-center">
        {algoValues.map((value, index) => (
          <div 
            key={index}
            className="flex flex-col justify-center items-center">
            <input
              className="rounded-full bg-gray-700 text-emerald-700 !outline-none !border-0 !ring-0"
              type="checkbox"
              onChange={(e) => {
                let newValues = [...algoValues];
                newValues[index].selected = e.target.checked;
                setAlgoValues(newValues);
              }}
              checked={value.selected}
            />
            <p className={`${value.selected ? "text-white" : "text-gray-500"}`}>
              {value.algo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
