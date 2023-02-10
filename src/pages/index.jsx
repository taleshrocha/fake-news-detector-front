import Head from "next/head";
import { allNews } from "./data.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fake News Detector</title>
        <meta name="description" content="An app to see if a news is fake." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center
        w-screen h-screen
        bg-gray-900 p-20 space-y-8">
        <h1 className="text-6xl text-gray-50">Fake News Detector</h1>

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
      </main>
    </>
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
