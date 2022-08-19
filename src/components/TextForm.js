import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="form-group">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary btn-sm" onClick={handleUpClick}>Convert to Upper Case</button>
        </div>
  )
}