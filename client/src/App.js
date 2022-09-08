import './App.css';
import {Routes, Route} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Home from "./pages/Home/Home"; 
import Admin from "./pages/Admin/Admin"; 
import Products from "./pages/Products/Products"; 
import Tutorial from "./pages/Tutorial/Tutorial"; 

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/tutorial" element={<Tutorial/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
    </>
  )
}

export default App;
