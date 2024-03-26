import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    // const [text,setText]=useState("Enter the text here")
    const [text,setText]=useState("")
    // Text="new tetx" wrong way to change the text

    const handleUpperCase=()=>{
        // console.log("Uppercase was clicked "+ text);
        let newText=text.toUpperCase();
        // setText("You have clicked on handleUpClick")
        setText(newText);
        props.showAlert("Converted to UpperCase! ","success");
    }

    const handleLowerCase=()=>{
      let newtext=text.toLocaleLowerCase();
      setText(newtext);
      props.showAlert("Converted to LowerCase! ","success");
    }

    const handleCapitalize=()=>{
      const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
      setText(capitalize(text));
      props.showAlert("Converted to Capitalized! ","success");

    }

    const handleCopy=()=>{
      var text=document.getElementById("mycopyText");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard! ","success");
    }

    // removing extra spaces
    const removeExtraSpace=()=>{
      let newTxt=text.split(/[ ]+/);
      setText(newTxt.join(" "));
      props.showAlert("Removed extra spaces! ","success");

    }

    const handleClearText=()=>{
      let newtext="";
      setText(newtext);
      props.showAlert("Text is Cleared! ","success");
    }

    // updating the values for text using use state Hooks
    const handleOnChange=(e)=>{
        // console.log("On change");
        // for testing 
        console.log(e);
        setText(e.target.value)
    }
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='light'?'cornflowerblue':`cornflowerblue`}}>
        {/* <h1 className='skyblue'>{props.heading}</h1> */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} id="mycopyText"  value={text} rows="8"></textarea>
        </div>
        {/* <button className="btn btn-primary">Convert to Uppercase</button> */}
        <button className="btn btn-primary" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
        <button className="btn btn-warning mx-2" onClick={handleCapitalize}>Convert to Capitalize</button>
        <button className="btn btn-info mx-2" onClick={handleCopy}>Copy the Text</button>
        <button className="btn btn-secondary mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-2" onClick={handleClearText}>Clear the text</button>
    </div>
    <div className="container my-3 py-2" style={{backgroundColor:props.mode==='light'?'white':`white`}}>
       {/* styled using the class in style sheet(App.css) */}
      {/* <h1 className='skyblue'>Your Text Summary</h1> */}
      <h1 style={{color:props.mode==='light'?'cornflowerblue':'cornflowerblue'}}>Your Text Summary</h1>

      {/* <p>{text.split(" ").length} Words, {text.length} characters</p> */}
      {/* Adding logic  */}
      <p>{(text==="") ? "0 Words,": `${text.split(" ").length} Words`}</p>
      {/* to read 125 words we need 1 minutes so 1/125 is equal to 0.008 words per minutes */}
      <p>{0.008*text.split(" ").length} Minutes read</p>
      {/* styled using the class in style sheet(App.css) */}
      {/* <h1 className='skyblue'>Preview</h1> */}

      {/* or you can use ternary operator  */}
      <h1 style={{color:props.mode==='light'?'cornflowerblue':'cornflowerblue'}}>Preview</h1>
      <p>{text.length>0?text:"Enter somethng to preview"}</p>
    </div>
    </>
  
  )
}

