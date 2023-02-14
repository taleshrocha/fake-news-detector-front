import { createContext, useState } from "react"

export const NewsContext = createContext({})

export function NewsProvider({ children }) {
  const [trustThreshold, setTrustThreshold] = useState(70)
  const [algoValues, setAlgoValues] = useState([
    { algo: "Cosine", selected: false },
    { algo: "Leven", selected: false },
    { algo: "Jaro", selected: false },
  ]);

  return (
    <NewsContext.Provider 
      value={{ 
        trustThreshold,
        setTrustThreshold,
        algoValues,
        setAlgoValues
      }}>
      {children}
    </NewsContext.Provider>
  )
}

