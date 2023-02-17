import { NewsContext } from "@/contexts/NewsContext";
import { useContext } from "react";

export default function Slider() {
  const { sliderValue, setSliderValue, algoValues, setAlgoValues } =
    useContext(NewsContext);

  return (
    <div className="flex flex-col font-bold text-white w-full">
      {/* Trust threshold slider */}
      <h1>Trust threshold: {sliderValue}%</h1>
      <input
        className="flex-1 input-slider input-track input-thumb w-3/2"
        type="range"
        min={0}
        max={100}
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
      />
      {/* Algorithms checkboxes */}
      <div className="flex space-x-4 justify-center items-center">
        {algoValues.map((value, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <input
              className="rounded-full bg-gray-700 text-emerald-700
              border-transparent focus:border-transparent focus:ring-0"
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
