import Body from "./Body/Body.js";
import Header from "./Header/Header.js";
import './App.css'
import{BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
    <div className="app">
      <Header />
      <Body />
    </div>
    </>
  );
}

export default App;
