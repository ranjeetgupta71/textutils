import React,{useState} from 'react'


export default function TextForm(props) {
  const [text , setText] = useState("");

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
  }
  const handleCapitaliseClick = ()=>{
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++)
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    let newText = arr.join(" ");

    setText(newText);
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  return (
      <>
      <div className='container'>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" id="myBox" onChange={handleOnChange} value ={text} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>ConvetToUpperCase</button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>ConvetToLowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
          <button className="btn btn-primary mx-1" onClick={handleCapitaliseClick}>Capitalise</button>
      </div>
      <div className="container my-3">
          <h2>My Text Summary</h2>
          <p>{text.length>0?((text.split(" ").length)+(text.split('\n').length-1)):0} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
      </>
  )
}
