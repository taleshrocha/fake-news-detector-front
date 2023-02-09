import Head from "next/head";

export default function Home({ data }) {
  const allNews = data._embedded.newsList;
  //flex flex-col justify-center items-center w-2/3 border-2 border-black rounded-3xl
  //border-y border-black
  return (
    <>
      <Head>
        <title>Fake News Detector</title>
        <meta name="description" content="An app to see if a news is fake." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center w-screen h-screen">
        <div className="flex justify-center items-center w-2/3 border-2 border-black rounded-3xl">
        <table className="table-fixed w-full">
          {allNews.map((news, index) => (
            <tr key={news.id} className="">
              <th>{index+1}</th>
              <th>{news.author}</th>
              <th>{news.date}</th>
              <th>{news.content}</th>
            </tr>
          ))}
        </table>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8080/news");
  const data = res.json();

  return {
    props: {
      data: await data,
    },
  };
}
