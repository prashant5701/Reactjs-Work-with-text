import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Write here....');
  // let text = "hello there..."

  const handleOnClick = () => {
    // console.log("clicked")
    // text = "changed..."//by deafult react doesn't watch all variables
    // setText('changed by onclick')
    let newText = text.toUpperCase();
    setText(newText)

  }
  const handleOnChange = (event) => {
    // console.log("changed")
    setText(event.target.value)
    // console.log(text)
  }
  

  return (<>
    <div className="container mb-3">
      <h1 style={{ color: "red", backgroundColor: "black" }}> {props.header}</h1>  {/*Props example*/}
      <div className="mb-3" >
        <textarea value={text} onChange={handleOnChange} className="form-control" name="" id="" cols="30" rows="10" ></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleOnClick}>convert to uppercase</button>
      <button type="button" className="btn btn-primary ms-3">convert to lowercase</button>
    </div>
    <div className="container mb-3 ">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} word and {text.length} characters</p>
    </div>
  </>

  )
} 
