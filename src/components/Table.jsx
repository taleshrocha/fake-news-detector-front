import { NewsContext } from "@/contexts/NewsContext";
import { useContext, useState } from "react";

export default function Table({ data }) {
  const { trustThreshold } = useContext(NewsContext);
  return (
    <div className="overflow-y-scroll rounded-lg border-4 border-gray-800 h-full">
      <table className="table-fixed text-center w-full h-full text-white">
        <thead>
          <tr className="bg-gray-800">
            <td>-</td>
            <td>Content</td>
            <td>Fake rate</td>
            <td>State</td>
            <td>-</td>
          </tr>
        </thead>
        <tbody>
          {data.map((news, index) => (
            <tr
              key={news.id}
              className="hover:bg-gray-600"
              onClick={() => console.log(news)}
            >
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
              <td className="table-cell">
                <CheckBox marked={false} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CheckBox({ marked }) {
  const [isMarked, setIsMarked] = useState(marked);

  return <button 
    className="text-center h-5 w-5 bg-white text-black"
    onClick={() => setIsMarked(!isMarked)}
  >{isMarked? "X" : "."}</button>;
}
