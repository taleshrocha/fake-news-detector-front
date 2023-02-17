import { createContext, useState } from "react";

export const NewsContext = createContext({});

export function NewsProvider({ children }) {
  const [newsContent, setNewsContent] = useState("");
  const [trustThreshold, setTrustThreshold] = useState(70);
  const [sliderValue, setSliderValue] = useState(70);
  const [algoValues, setAlgoValues] = useState([
    { algo: "cosine", selected: false },
    { algo: "leven", selected: false },
    { algo: "jaro", selected: false },
  ]);
  const [currentNews, setCurrentNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <NewsContext.Provider
      value={{
        trustThreshold,
        setTrustThreshold,
        algoValues,
        setAlgoValues,
        newsContent,
        setNewsContent,
        currentNews,
        setCurrentNews,
        isLoading,
        setIsLoading,
        sliderValue,
        setSliderValue
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
