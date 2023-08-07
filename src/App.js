import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* bc profile ki testing karenge kl  */}
      <Profile />
      {/* <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;
