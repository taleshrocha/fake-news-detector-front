import Head from "next/head";
import NavBar from "@/components/NavBar.jsx";
import TextInput from "@/components/TextInput.jsx";
import Table from "@/components/Table";

export default function Home() {
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
        w-full h-full min-h-screen min-w-screen
        bg-gray-900
        "
      >
        <NavBar />

        <h1 className="text-6xl text-gray-50">Fake News Detector</h1>

        <TextInput />
        <Table />
      </main>
    </>
  );
}