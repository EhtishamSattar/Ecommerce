import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import LoginTrial from './Components/LoginTrial';


function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/loginTrial" element={<LoginTrial/>}/>
       
      </Routes>
    </>

  );
}

export default App;
