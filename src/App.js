import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from './components/Alerts';
import About from "./components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [btnColor, setBtnColor] = useState()


const showAlert = (message, type) =>{
  setAlert({
    msg : message,
    type: type,
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

  const toggleMode = (color) =>{
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("dark mode has been enabled", 'success')
      setBtnColor()

    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", 'success')
      setBtnColor()

    }


} 
  const changeColor = (color) => {
    document.body.style.backgroundColor = color
    setBtnColor(color)


  }
  return (
    <Router>
      <>
        <Navbar title = 'TextUtils'  mode={mode} toggleMode = {toggleMode} changeColor={changeColor}/>
        <Alerts alert={alert} />
        <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} btnColor={btnColor} />} />
        <Route path="/about" element={<About mode = {mode}/>} />
        </Routes>
      </> 
    </Router>
  )
}

export default App;