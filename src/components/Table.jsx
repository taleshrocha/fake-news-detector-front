import { NewsContext } from "@/contexts/NewsContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function Table() {
  const { trustThreshold } = useContext(NewsContext);
  const checkRef = useRef(null);
  const [allNews, setAllNews] = useState();
  const [checkBoxValue, setCheckBoxValue] = useState([false]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  function getData() {
    setIsLoadingData(true);
    fetch("http://localhost:8080/news/base/false")
      .then((response) => response.json())
      .then((data) => {
        setAllNews(data);
        if (data._embedded)
          setCheckBoxValue(
            Array(Object.keys(data?._embedded?.newsList).length).fill(false)
          );
        else
        setIsLoadingData(false);
      })
      .catch((error) => {
        console.log("Error in getData()\n", error);
        setIsLoadingData(false);
      });
  }

  function allAreTrue(arr) {
    return arr.every((element) => element === true);
  }

  return (
    <div
      className={`${
        isLoadingData && "!overflow-y-hidden"
      } relative flex flex-col overflow-y-scroll rounded-lg border-4 border-gray-800 h-full`}
    >
      <div
        className={`${
          !isLoadingData && "hidden"
        } absolute flex justify-center items-center z-10 w-full h-full bg-black/60 backdrop-blur-md`}
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
      <button onClick={getData}>Get Data</button>
      <table className="table-fixed text-center w-full h-full text-white">
        <thead className="sticky top-0">
          <tr className="bg-gray-800">
            <td>-</td>
            <td>Content</td>
            <td>Fake rate</td>
            <td>State</td>
            <td>
              <input
                type="checkbox"
                onChange={(e) => {
                  setCheckBoxValue(
                    Array(allNews?._embedded?.newsList.length).fill(
                      e.target.checked
                    )
                  );
                }}
                ref={checkRef}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {allNews?._embedded?.newsList.map((news, index) => (
            <tr key={news.id} className="hover:bg-gray-600">
              <td>{index + 1}</td>
              <td className="truncate">{news.content}</td>
              <td className="">{news.fakeRate}</td>
              <td
                className={`
                  font-bold ${
                    news.fakeRate * 100 < trustThreshold
                      ? "text-green-500"
                      : "text-red-500"
                  }
                `}
              >
                {news.fakeRate * 100 < trustThreshold ? "True" : "Fake"}
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    let newValue = [...checkBoxValue];
                    newValue[index] = e.target.checked;
                    checkRef.current.checked = allAreTrue(newValue);
                    setCheckBoxValue(newValue);
                  }}
                  checked={checkBoxValue[index]}
                  className=""
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
