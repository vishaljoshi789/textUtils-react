import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [themeMode, setthemeMode] = useState('light');

  const toggleThemeMode = () => {
    setthemeMode(themeMode === 'light' ? 'dark' : 'light');
  }
  return (
    <div>

      <Navbar title="TextUtils" aboutText="About TextUtils" mode={themeMode} toggleThemeMode={toggleThemeMode} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>

    </div>
  );
}

export default App;
