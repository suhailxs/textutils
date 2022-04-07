import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForms";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState("light"); // wheather dark mopde is enable or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  
  

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled","success")
      document.title = "TextUtils | Light Mode";
      setTimeout(() => {
        document.title = "TextUtils | Home"
      }, 2000);

    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#061a38";
      showAlert("Dark Mode Enabled","success")
      document.title = "TextUtils | Dark Mode";

      // setTimeout(() => {
      //   document.title = "TextUtils | Home"
      // }, 2000);


      // setInterval(() => {
      //   document.title = "TextUtls | Home"
      // }, 1000);
      // setInterval(() => {
      //   document.title = "TextUtils | Dark Mode"
      //   // console.log("hello world")
      // }, 1000);

    }
  };

  return (
    <>
      {/* <Navbar title= "suhail"/> */}
      <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter Your Text to Analyze" />}/>
          <Route exact path="/about" element={<About/>}/>
           
          
          {/* <Route path="/">
          <TextForm mode={mode} showAlert={showAlert} heading="Enter Your Text to Analyze" />
          </Route> */}
      </Routes>
       
      </div>
      </Router>
    </>
  );
}

export default App;
