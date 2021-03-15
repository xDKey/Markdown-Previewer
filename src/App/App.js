import { useState, useEffect } from 'react'
import marked from 'marked';
import Preview from '../Previewer/Previewer'
import Editor from '../Editor/Editor'
import './App.css'
import placeHolder from './placeHolder'


function App() {
  const [rawText, setRawText] = useState(placeHolder)
  const [markedText, setMarkedText] = useState(null)

  useEffect(() => {
    const html = {__html: marked(rawText)}
    setMarkedText(html)
  },
  [rawText])

  return (
    <div className="markdown-previewer">
      <Editor setRawText={setRawText} rawText={rawText}/>
      <Preview markedText={markedText}/>
    </div>
  );
}

export default App;
