import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <div>

      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>

    </div>
  );
}

export default App;
