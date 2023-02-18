import { NewsContext } from "@/contexts/NewsContext";
import { useContext } from "react";

export default function Results() {
  const { algoValues, isLoading, currentNews, trustThreshold } =
    useContext(NewsContext);

  return (
    <div
      className="relative flex flex-col justify-center items-center w-full h-full 
      text-white border-2 border-gray-800"
    >
      <div
        className={`${
          !isLoading && "hidden"
        } absolute flex justify-center items-center z-10 w-full h-full bg-black/20 backdrop-blur-sm cursor-wait`}
      >
        <svg
          className="animate-spin h-12 w-12 text-emerald-700"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
      {currentNews ? (
        <>
                <h1 className="font-bold">
                  Result {(currentNews.fakeRate * 100).toFixed(0)}%
                </h1>
              );
          <p
            className={`font-bold ${
              currentNews.fakeRate * 100 <= trustThreshold
                ? "text-green-500"
                : "text-red-500"
            }
                `}
          >
            {currentNews.fakeRate * 100 <= trustThreshold
              ? "This looks like to be a True News"
              : "This looks like to be a Fake News"}
          </p>
        </>
      ) : (
        <p>Post a news and check if it is fake in here</p>
        )
      }
    </div>
  );
}
