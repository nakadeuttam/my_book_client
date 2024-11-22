import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/noteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import HomeIntro from "./components/HomeIntro";
import Error from "./components/Error";
import { GoogleOAuthProvider } from '@react-oauth/google';
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
          <Route exact path="/login" element={<GoogleOAuthProvider clientId="75652528374-gj7i9975s19sdckr65mbih77j4hvc8nm.apps.googleusercontent.com"><Login/></GoogleOAuthProvider>}></Route>
          <Route exact path="/signup" element={<GoogleOAuthProvider clientId="75652528374-gj7i9975s19sdckr65mbih77j4hvc8nm.apps.googleusercontent.com"><Signup/></GoogleOAuthProvider>}></Route>
          <Route exact path="*" element={<Error/>}></Route>
        </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
