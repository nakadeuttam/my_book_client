import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/noteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomeIntro from "./components/HomeIntro";
function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<HomeIntro />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
