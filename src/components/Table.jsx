import { NewsContext } from "@/contexts/NewsContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function Table() {
  const { trustThreshold } = useContext(NewsContext);
  const checkRef = useRef(null);
  const [allNews, setAllNews] = useState();
  const [checkBoxValue, setCheckBoxValue] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  function getData() {
    setIsLoadingData(true);
    fetch("http://localhost:8080/news/base/true")
      .then((response) => response.json())
      .then((data) => {
        setAllNews(data);
        setIsLoadingData(false);
      })
      .catch((error) => {
        console.log("Can't get data: ", error);
        setIsLoadingData(false);
      });
  }

  function allAreTrue(arr) {
    return arr.every((element) => element === true);
  }

  return (
    <div className={`${isLoadingData && "bg-red-600"} relative flex flex-col overflow-y-scroll rounded-lg border-4 border-gray-800 h-full`}>
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
                    Array(
                      Object.keys(allNews?._embedded?.newsList).length
                    ).fill(e.target.checked)
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
