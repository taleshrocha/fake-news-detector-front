import Head from "next/head";
import NavBar from "@/components/NavBar.jsx";
import TextInput from "@/components/TextInput.jsx";
import Table from "@/components/Table";
import Slider from "@/components/Slider";
import { allNews } from "@/pages/data.js";

import { NewsProvider } from "@/contexts/NewsContext";

export default function Home() {
  //const allNews = data._embedded.newsList
  return (
    <>
      <Head>
        <title>Fake News Detector</title>
        <meta name="description" content="An app to see if a news is fake." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="
        flex justify-center items-center
        w-screen h-screen
        bg-gray-900 py-4
        "
      >
        <NavBar />

        <div
          className="flex flex-col justify-center items-center 
          w-full h-full px-20 space-y-8"
        >
          <h1 className="text-6xl text-gray-50">Fake News Detector</h1>

          <TextInput />
          <NewsProvider>
            <Slider />
            <Table data={allNews}/>
          </NewsProvider>
        </div>
      </main>
    </>
  );
}

//export async function getServerSideProps() {
//  const res = await fetch("http://localhost:8080/news");
//  const data = res.json();
//
//  return {
//    props: {
//      data: await data,
//    },
//  };
//}
