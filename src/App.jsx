import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Alert from './components/Alert'
import { toast, ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import ProductState from './context/ProductState'
import Cartitems from './components/Cartitems'
import AddProduct from './components/AddProduct'


function App() {

  const [text, setText] = useState("dark mode");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  const toggleMode = (e) => {
    e.preventDefault();
    if (mode == "dark") {
      setMode("light");
      setText("dark mode");
      // showAlert("success", "light mode has been enabled");
      toast("light mode ");

    } else {
      setMode("dark");
      setText("light mode");
      // showAlert("success", "dark mode has been enabled");
      toast("dark mode ");

    }
  };

  const showAlert = (type, message)=>{
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    
  };
  let pageName = "My-WebPage";

  

  return (
    <>
    <ProductState>
    <Router>
          <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          // transition={Bounce}
        />
    <Navbar
    pageName = {pageName}
    mode = {mode}
    text = {text}
    toggleMode = {toggleMode}
    alert = {alert}
    />{" "}

    <Alert alert = {alert} />

    <Routes>
      <Route path="/" element= {<Home />} />
        <Route path="/about-us" element= {<About />} />
        <Route path="/contact-us" element= {<Contact />} />   
        <Route path="/login" element= {<Login />} />    
        <Route path="/signup" element= {<Signup />} /> 
        <Route path='/cart-items' element= {<Cartitems />} />
        <Route path='/add-products' element= {<AddProduct />} />
      </Routes>

    </Router>

    <Footer />
    </ProductState>
    </>
  )
}

export default App
