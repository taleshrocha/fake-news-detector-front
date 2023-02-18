import { FaRegPaperPlane as PlaneIcon } from "react-icons/fa";
import { NewsContext } from "@/contexts/NewsContext";
import { useContext } from "react";

export default function SendButton() {
  const {
    sliderValue,
    setTrustThreshold,
    setIsLoading,
    algoValues,
    setCurrentNews,
    newsContent,
    setNewsContent,
  } = useContext(NewsContext);
  var news = {};
  var algos = "";

  function getAlgoResults() {
    if (newsContent.trim().split(" ").length >= 8) {
      setIsLoading(true);
      news.content = newsContent;
      setNewsContent("");
      algoValues.forEach((value) => {
        if (value.selected) algos = algos + value.algo;
      });
      console.log(algos)
      fetch(`http://localhost:8080/news/${algos}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ content: news.content }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          news.fakeRate = data;
          setCurrentNews(news);
          setTrustThreshold(sliderValue);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error in putAlgorithms()\n", error);
          setIsLoading(false);
        });
    }
  }

  return (
    <div>
      <button
        className={`
            flex items-center justify-center
            p-2 bg-gray-800 rounded-md 
            font-bold whitespace-pre
            border-2 border-emerald-700 text-emerald-700
            ${
              newsContent.trim().split(" ").length < 8 &&
              "!bg-gray-700 !text-gray-800 !border-gray-800 cursor-not-allowed"
            }
`}
        onClick={getAlgoResults}
        disabled={newsContent.trim().split(" ").length < 8}
      >
        Check News <PlaneIcon />
      </button>
    </div>
  );
}
