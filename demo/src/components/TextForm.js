import React,{useState} from 'react'


export default function TextForm(props){
    const handleUpClick = () =>{
        //console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        let lowText = text.toLowerCase();
        setText(lowText);
    }
    const handleClearClick = () =>{
        let clearText = "";
        setText(clearText);
    }
    const handleOnChange = (event) =>{
        //console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    //text = "new text" //wrong way to change the state
    //setText("sfjahsdfjksha"); //right way to change the state
    return(
    <>
    <div>
        <div className="container">
        <label htmlFor="myText" className="form-label">{props.heading}</label>
        <textarea className="form-control" value ={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-4" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-secondary mx-2 my-4" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-secondary mx-2 my-4" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div>
        <div className="container  my-3">
            <h1>Your text summary</h1>
            {/* character and word length */}
            <p>{text.split(" ").length} words and {text.length} characters</p>
            {/* time count */}
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

    </div>
    </>
    )
}