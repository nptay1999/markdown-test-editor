import React, { useContext } from "react"
import { EditorContext } from "../editorContext"

const MakedInput = () => {
  const { setMarkdownText } = useContext(EditorContext)
  const onInputChange = (event) => {
    const newText = event.target.value
    setMarkdownText(newText)
  }
  return (
    <div className="makedown-input">
      <h1>Makedown text</h1>
      <textarea onChange={onInputChange}></textarea>
    </div>
  )
}

export default MakedInput
