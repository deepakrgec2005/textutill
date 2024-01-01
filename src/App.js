import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [sts, setSts] = useState('Off');
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); 
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const colorP = (event)=>{
    //console.log("inside colorP");
    var text = event.target.textContent;
   // console.log("inside colorP"+text);
    switch (text) {
      case 'Primary':
        document.body.style.backgroundColor = '#0d6efd';
        break;
      case 'Secondary':
        document.body.style.backgroundColor = '#6c757d';
        break;
      case 'Success':
        document.body.style.backgroundColor = '#198754';
        break;
      case 'Danger':
        document.body.style.backgroundColor = '#dc3545';
        break;
      case 'Warning':
        document.body.style.backgroundColor = '#ffc107';
        break;
      case 'Info':
        document.body.style.backgroundColor = '#0dcaf0';
        break;
        case 'Light':
          document.body.style.backgroundColor = '#f8f9fa';
          break;
        case 'Dark':
          document.body.style.backgroundColor = '#212529';
          break;
      default:
        document.body.style.backgroundColor = '#ffffff';
        break;
    }
   
  }
  const tgMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      setSts('On');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light');
      setSts('Off');
      document.body.style.backgroundColor ='white';
      showAlert("Light Mode Enabled", "Success");
    }
  }
  return (
  <>
  <BrowserRouter> 
<Navbar title='TextUtils' mode={mode} sts={sts} tgMode={tgMode} colorP={colorP}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text here to analyze" mode={mode}/>}>
            
         </Route>
  </Routes>

</div>
</BrowserRouter>
  </>
   
  );
}
 
export default App; 