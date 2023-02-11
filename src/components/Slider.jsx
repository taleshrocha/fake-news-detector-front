import { useState } from "react"

 export default function Slider() {
    const [value, setValue] = useState(70)
  console.log(value)
  return (
    <div className="font-bold text-white w-full">
      <h1>Trust threshold: {value}%</h1>
       <input 
        className="input-slider input-track input-thumb w-full"
        type="range" min={0} max={100} value={value}
        onChange={(e) => setValue(e.target.value)}
      />
     </div>
  )
}
