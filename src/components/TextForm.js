import React, {useState} from 'react'

function TextForm(props) {
  const [text, setText] = useState("")
  const clickUpperCase = () => {
  const newText = text.toUpperCase()
  setText(newText)
  props.showAlert('Converted to Uppercase' , 'success')
  }
  const clickLowerCase = () => {
  const newText = text.toLowerCase()
  setText(newText)
  props.showAlert('Converted to Lowercase' , 'success')

  }
  const clickClear = () => {
  setText('')
  props.showAlert('Text has been cleared' , 'success')

  }

  const clickCopy = () => {
    let text = document.getElementById('myBox')
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert('text has been copied' , 'success')
    

  }

  //count words funciton
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }
  return (
    <>
    
      <div className="container" style={{color: props.mode === 'light'? 'black':'white'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light'? 'white':'grey' , color: props.mode === 'light'? 'black':'white', border: `2px solid ${props.mode === 'light'? 'black':'white'}`}} onChange={handleChange} id="myBox" rows="3"></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-1" style={{backgroundColor : props.btnColor}} onClick={clickUpperCase} >Convert to Uppercase</button>
          <button className="btn btn-primary mx-2 my-1" style={{backgroundColor : props.btnColor}} onClick={clickClear} >Clear Text</button>
          <button className="btn btn-primary mx-2 my-1" style={{backgroundColor : props.btnColor}} onClick={clickLowerCase} >Convert to LowerCase</button>
          <button className="btn btn-primary mx-2 my-1" style={{backgroundColor : props.btnColor}} onClick={clickCopy} >Copy Text</button>
      </div>
      <div className="container my-4" style={{color: props.mode === 'light'? 'black':'white'}}>
        <h2>your text summary</h2>
        <p>{countWords(text)} words and {text.length} characters</p>
        <p>{0.008 * countWords(text)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextForm
