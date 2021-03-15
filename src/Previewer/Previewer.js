import './Previewer.css'

const Preview = ( { markedText } ) => <div id="preview" dangerouslySetInnerHTML={markedText}></div>

export default Preview