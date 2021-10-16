import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Education />
    </>
  );
}

export default App;
