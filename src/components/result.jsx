import React, { useContext } from "react"
import ReactMarkdown from "react-markdown"
import { EditorContext } from "../editorContext"

const Result = () => {
  const { markdownText } = useContext(EditorContext)
  return (
    <div className="result">
      <h1>Makedown Result</h1>
      <div>
        <ReactMarkdown children={markdownText} />
      </div>
    </div>
  )
}

export default Result
