import { NewsContext } from "@/contexts/NewsContext";
import { useContext, useEffect, useRef, useState } from "react";

export default function Table({ data }) {
  const { trustThreshold } = useContext(NewsContext);
  const [allChecked, setAllChecked] = useState(false);
  const [rateMed, setRateMed] = useState(0);
  const [trueNews, setTrueNews] = useState(0);
  const [checkBoxValue, setCheckBoxValue] = useState(
    Array(Object.keys(data).length).fill(false)
  );
  const checkRef = useRef(null);

  function allAreTrue(arr) {
    return arr.every((element) => element === true);
  }

  return (
    <div className="relative flex flex-col overflow-y-scroll rounded-lg border-4 border-gray-800 h-full">
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
                    Array(Object.keys(data).length).fill(e.target.checked)
                  );
                }}
                ref={checkRef}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((news, index) => (
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
                    checkRef.current.checked = allAreTrue(newValue)
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
