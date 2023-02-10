import { FaRegPaperPlane as PlaneIcon } from "react-icons/fa";

export default function TextInput() {
  return (
    <div
      className="group relative flex flex-col w-full h-full bg-gray-900 
          overflow-hidden
          text-white border-4 border-gray-800 rounded-lg p-2"
    >
      <textarea
        className="resize-none w-full h-full text-white bg-inherit outline-none"
        placeholder="Add your news here"
      />
      <button
        className="
            flex items-center justify-center absolute bottom-4 right-4 w-10 h-10 
            p-2 bg-gray-800 rounded-full
            transition-all duration-500 ease-out
            translate-y-14 translate-x-14 
            group-hover:translate-y-0 group-hover:translate-x-0
           "
      >
        <PlaneIcon size={100} className="text-emerald-600 " />
      </button>
    </div>
  );
}
