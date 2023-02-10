import { allNews } from "@/pages/data.js";

export default function Table() {
  return (
    <div className="overflow-y-scroll rounded-lg border-4 border-gray-800">
      <table className="table-fixed text-center w-full h-full text-white">
        <thead>
          <tr className="bg-gray-800">
            <td>-</td>
            <td>Author</td>
            <td>Date</td>
            <td>Content</td>
          </tr>
        </thead>
        <tbody>
          {allNews.map((news, index) => (
            <tr
              key={news.id}
              className="hover:bg-gray-600 hover:cursor-pointer"
              onClick={() => console.log(news)}
            >
              <td>{index + 1}</td>
              <td>{news.author}</td>
              <td>{news.date}</td>
              <td className="truncate">{news.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

//export async function getServerSideProps() {
//const res = await fetch("http://localhost:8080/news");
//const data = res.json();

//return {
//  props: {
//    data: await data,
//  },
//};
//}
