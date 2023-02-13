import { NewsContext } from "@/contexts/NewsContext";
import { allNews } from "@/pages/data";
import { useContext, useState } from "react";

export default function Table({ data }) {
  const { trustThreshold } = useContext(NewsContext);

  return (
    <div className="
                    flex flex-col h-2/6 max-w-2xl mx-auto
                    overflow-y-scroll overflow-x-hidden shadow-md sm:rounded-lg  min-w-full align-middle
                  ">
          <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {allNews.map((news, index) => (
                <tr 
                  key={index}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white truncate">
                    {news.author}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {news.fakeRate}
                  </td>
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
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

  return (
    <button
      className="text-center h-5 w-5 bg-white text-black"
      onClick={() => setIsMarked(!isMarked)}
    >
      {isMarked ? "X" : "."}
    </button>
  );
}
