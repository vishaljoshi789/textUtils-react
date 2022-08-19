import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, settext] = useState('')

    const handleUpClick = () => {
        let t = text.toUpperCase()
        settext(t)
    }

    const handleLowerClick = () => {
        let t = text.toLowerCase()
        settext(t)
    }

    const handleClearClick = () => {
        settext('')
    }

    const gettext = (event) => {
        settext(event.target.value)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
    }

    const handleExtraSpaceRemoveClick = () => {
        let t = text.replace(/\s+/g, ' ')
        settext(t)
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} placeholder="Enter your text here" onChange={gettext}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerClick}>LowerCase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary" onClick={handleExtraSpaceRemoveClick}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.01 * text.split(' ').length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
