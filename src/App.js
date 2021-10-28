import "./App.css"
import MakedInput from "./components/makedInput"
import Result from "./components/result"
import EditorContextProvider from "./editorContext"

function App() {
  return (
    <EditorContextProvider>
      <div className="App">
        <h1>Makedown editor</h1>
        <div className="editor">
          <MakedInput />
          <Result />
        </div>
      </div>
    </EditorContextProvider>
  )
}

export default App
