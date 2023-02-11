import { NewsContext } from "@/contexts/NewsContext";
import { useContext } from "react";

export default function Table({data}) {
  const {trustThreshold} = useContext(NewsContext)
  return (
    <div className="overflow-y-scroll rounded-lg border-4 border-gray-800 h-full">
      <table className="table-fixed text-center w-full h-full text-white">
        <thead>
          <tr className="bg-gray-800">
            <td>-</td>
            <td>Content</td>
            <td>Fake rate</td>
            <td>State</td>
          </tr>
        </thead>
        <tbody>
          {data.map((news, index) => (
            <tr
              key={news.id}
              className="hover:bg-gray-600 hover:cursor-pointer"
              onClick={() => console.log(news)}
            >
              <td>{index + 1}</td>
              <td className="truncate">{news.content}</td>
              <td className="">{news.fakeRate}</td>
              <td
                className={`
                  font-bold ${news.fakeRate * 100 < trustThreshold
                    ? "text-green-500"
                    : "text-red-500"
                  }
                `}
              >
                {news.fakeRate * 100 < trustThreshold ? "True" : "Fake"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
