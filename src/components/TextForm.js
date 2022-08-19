import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="form-group">
                <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary btn-sm" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-primary btn-sm mx-1" onClick={handleLowClick}>Convert to Lower Case</button>
            </div>

            <div className="container" >
                <h3> Text Summary </h3>
                <p> your text has <b>{text.split(" ").length} words</b> and <b> {text.length} characters</b> and it can be read
                    in <b>{0.008 * text.split(" ").length} minutes </b></p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
  )
}