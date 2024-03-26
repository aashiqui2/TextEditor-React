import React,{useState} from 'react'
import "./App.css";
import About from "./components/About";
import { Navbar } from './components/Navbar';
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");// whether dark mode is enabled or not

  const [alert,setAlert]=useState(null);

  
  // this is for alert
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
  }

  // this function is for togggle component(btn) in bootstrap 
  const togglemode=()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode is enabled","success")
      document.title="TextUtil - dark"
      // setTimeout(()=>{
      //   document.title="TextUtil - INSTALL"
      // },1000)
     
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="#fff";
      showAlert("Dark mode is disabled","warning")
      document.title="TextUtil - light"
    }
  }



  return (
  <>
 <Router>
  <Navbar title={"Foolish Programmer"} about={"About Us"} mode={mode}  togglemode={togglemode}/>
  {/* <Navbar /> */}
  <Alert alert={alert}/>
  <Routes>
          <Route path="/about" element={  <About/>}>
           
          </Route>
          <Route path="/" element={ <TextForm heading={"Enter the text to UpperCase below"} showAlert={showAlert}/>}>
              
          </Route>
  </Routes>
  {/* <About/> */}
  </Router>
  </>
  );
}

export default App;
