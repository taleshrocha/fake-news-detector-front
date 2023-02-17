import { FaRegPaperPlane as PlaneIcon } from "react-icons/fa";
import { NewsContext } from "@/contexts/NewsContext";
import { useContext} from "react";

export default function SendButton() {
const {newsContent, setNewsContent} =
  useContext(NewsContext);

  function postNews() {
    fetch("http://localhost:8080/news", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ content: content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error in sendNews()\n", error);
      });
  }

  function getNews() {
    setIsLoading(true);
    fetch("http://localhost:8080/news/25")
      .then((response) => response.json())
      .then((data) => {
        //setNews(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error in getData()\n", error);
        setIsLoading(false);
      })
      .then(() => putAlgorithms());
  }

  function putAlgorithms() {
    algoValues.forEach((value) => {
      if (value.selected)
        fetch(`http://localhost:8080/news/${value.algo}`, {
          method: "PUT",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        })
          .then((response) => {
            console.log(response);
          })
          //.them(() => getNews())
          .catch((error) => {
            console.log("Error in sendNews()\n", error);
          });
    });
  }

  return (
    <div>
        <button
          className={`
            flex items-center justify-center w-10 h-10 
            p-2 bg-gray-800 rounded-full
            transition-all duration-500 ease-out
            border-2 border-emerald-700
          `}
          onClick={() => {
            //setTrustThreshold(value);
            //setAlgoValues(algoValues);
            //postNews();
            //getNews();
          }}
        >
        <PlaneIcon />
        </button>
    </div>
  );
}
