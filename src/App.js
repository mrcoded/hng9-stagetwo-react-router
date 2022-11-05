import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import { Contact } from "./components/Contact";
import Profile from "./components/Profile";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
