import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [themeMode, setthemeMode] = useState('light');
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleThemeMode = () => {
    if (themeMode === 'light') {
      setthemeMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark Mode Enabled', 'success');
    }
    else {
      setthemeMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      showAlert('Light Mode Enabled', 'success');
    }
  }
  return (
    < >
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={themeMode} toggleThemeMode={toggleThemeMode} />
      <Alert alert={alert} />
      <div className='container my-3'>

        {/* <Routes> */}
        {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={themeMode} showAlert={showAlert} />} /> */}


        {/* <Route exact path="/about" element={<About />} /> */}

        {/* </Routes> */}
        <TextForm heading="Enter the text to analyze below" mode={themeMode} showAlert={showAlert} />

      </div>
      {/* </Router> */}
    </ >
  );
}

export default App;
