import './Editor.css'

const Editor = ({ setRawText, rawText }) => {
    
    const handleInputChange = ( { target } ) => {
        setRawText(target.value)
    }

    return (
        <textarea id="editor" onChange={handleInputChange} value={rawText}>asdad</textarea>
    )
}

export default Editor