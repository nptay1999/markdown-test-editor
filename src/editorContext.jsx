import React, { createContext, useState } from "react"

export const EditorContext = createContext()

const EditorContextProvider = ({ children }) => {
  const [markdownText, setMarkdownText] = useState("")
  const editor = {
    markdownText,
    setMarkdownText,
  }

  return (
    <EditorContext.Provider value={editor}>{children}</EditorContext.Provider>
  )
}

export default EditorContextProvider
