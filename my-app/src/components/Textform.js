import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('Write here....');
 
  const handleOnUp = () => {
    let newText = text.toUpperCase();
    setText(newText)
    setTimeout(()=>{alert("converted to Uppercase")},500)
  }
  const handleOnLo = ()=>{ 
    let newText = text.toLowerCase();
    setText(newText)
    setTimeout(()=>{ alert("converted to Lowercase")},500)
  }

const handleOnClear = ()=>{ 
    let newText = '';
    setText(newText);
    setTimeout(()=>{ alert("Text Cleared")},500)
}

const handleOnCopy = () => {
    navigator.clipboard.writeText(text); 
    setTimeout(()=>{alert("Text Copied")},500)
}

const handleOnExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    setTimeout(()=>{alert("Extra spaces removed")},500)

}
  
const handleOnChange = (event) => {
  // console.log("changed")
  setText(event.target.value)
  // console.log(text)
}

  return (<>
    <div className="container mb-3" style={{backgroundColor:"grey",padding:"10px",borderRadius:"5px"}}>
      <h1 style={{ color: "red", backgroundColor: "black" }}> {props.header}</h1>  {/*Props example*/}
      <div className="mb-3" >
        <textarea value={text} onChange={handleOnChange} className="form-control" name="" id="" cols="30" rows="10" ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleOnUp}>Convert to uppercase</button>
      <button type="button" className="btn btn-primary ms-3" onClick={handleOnLo}>Convert to lowercase</button>
      <button type="button" className="btn btn-primary ms-3" onClick={handleOnClear}>Clear text</button>
      <button type="button" className="btn btn-primary ms-3" onClick={handleOnExtraSpaces}>Remove extra spaces</button>
      <button type="button" className="btn btn-primary ms-3" onClick={handleOnCopy}>Copy text</button>

    </div>
    <div className="container mb-3 ">
      <h1 style={{color:"white"}}>Your text summary</h1>
      {/* <p>{text.split(" ").length} word and {text.length} characters</p> */}
      <p style={{color:"white"}} >{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    </div>
  </>

  )
} 
