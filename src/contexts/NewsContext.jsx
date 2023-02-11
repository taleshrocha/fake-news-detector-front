import { createContext, useState } from "react"

export const NewsContext = createContext({})

export function NewsProvider({ children }) {
  const [trustThreshold, setTrustThreshold] = useState(70)

  return (
    <NewsContext.Provider 
      value={{ 
        trustThreshold,
        setTrustThreshold
      }}>
      {children}
    </NewsContext.Provider>
  )
}

