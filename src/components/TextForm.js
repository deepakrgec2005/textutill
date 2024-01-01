import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked"+text);
    let newT =text.toUpperCase();
    setText(newT);
    props.showAlert("Converted to Upper Case","success");

  }
  const handleDnClick = ()=>{
    console.log("Lowercase was clicked"+text);
    let newT =text.toLowerCase();
    setText(newT);
    props.showAlert("Converted to Lower Case","success");
  }
  const handleClear = ()=>{
    console.log("ClearText was clicked"+text);
    //let newT =text.toLowerCase();
    setText('');
    props.showAlert("Blank","success");
  }
  const handleCopy = ()=>{
    console.log("CopyText was clicked");
    //let newT =text.toLowerCase();
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Successfully Copy","success");
  }
  const handleOnChange = (event)=>{
    console.log("OnChange");
    setText(event.target.value);
  }
  const handleRemoveSpace = (event)=>{
   let newText = text.split(/[ ]+/);;
   setText(newText.join(" "))
  }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'grey'}}>
    <h1>{props.heading}</h1>
        <div className="mb-3">
           
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'grey'}} id="myBox" rows="8"></textarea>
            <button type="button" className="btn btn-primary mx-4 p-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button type="button" className="btn btn-secondary mx-4 p-2" onClick={handleDnClick} >Convert to Lokwer Case</button>
            <button type="button" className="btn btn-danger mx-4 p-2" onClick={handleClear} >Clear Text</button>
            <button type="button" className="btn btn-danger mx-4 p-2" onClick={handleCopy} >Copy Text</button>
            <button type="button" className="btn btn-danger mx-4 p-2" onClick={handleRemoveSpace} >Remove Space</button>
            

    </div>
</div>
<div className="container my-2" style={{color: props.mode==='dark'?'white':'grey'}}>
  <h1>Your Text Summary</h1>
  <p>{text.length===0?0:text[text.length-1]===" "?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read </p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter your text to preview here"}</p>
</div>
</>
  );
}
 