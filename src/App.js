import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";

import "./Styles/home.scss"
import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/footer.scss";
import "./Styles/contact.scss";
import "./Styles/mediaquery.scss";
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App
