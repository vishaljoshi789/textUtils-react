import React, { useState } from 'react'


export default function TextForm(props) {

    const [text, settext] = useState('')

    const handleUpClick = () => {
        let t = text.toUpperCase()
        settext(t)
        props.showAlert("Sucessfully converted into uppercase", 'success')
    }

    const handleLowerClick = () => {
        let t = text.toLowerCase()
        settext(t)
        props.showAlert("Sucessfully converted into lowercase", 'success')
    }

    const handleClearClick = () => {
        settext('')
        props.showAlert("Text cleared", 'success')
    }

    const gettext = (event) => {
        settext(event.target.value)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to clipboard", 'success')
    }

    const handleExtraSpaceRemoveClick = () => {
        let t = text.replace(/\s+/g, ' ')
        settext(t)
        props.showAlert("Extra spaces removed", 'success')
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
                    <textarea style={{ color: props.mode === 'light' ? 'black' : 'white', background: 'none' }} className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} placeholder="Enter your text here" onChange={gettext}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerClick}>LowerCase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary" onClick={handleExtraSpaceRemoveClick}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Your Text Summary</h2>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text.split(' ').length} words and {text.length} characters</p>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{0.01 * text.split(' ').length} Minutes read</p>
                <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>Preview</h2>
                <p style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{text}</p>
            </div>
        </>
    )
}
