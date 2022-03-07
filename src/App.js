import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
//import NavTest from "./components/NavTest";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
// import Skills from "./components/Skills";
//  import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
//import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ContactMe from './components/ContactMe';
import { circleBounce } from 'tsparticles/Utils';
import Particles from "react-particles-js";

function App() {

  return (
    <>
      {/* <Particles
    className="particles-canvas"
    params={{
      particles:{
        number:{
          value:30,
          density: {
            enable: true,
            value_area:900
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width:6,
            color:'#dbd8e3'
          }

        }
      }
    }}/> */}
      <Particles

        params={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#00fff5",
              animation: {
                enable: false,
                speed: 10,
                sync: true
              }
            },
            links: {
              color: "#341fff",
              enable: false
            },
            shape: {
              type: ["circle", "square"]
            },
            opacity: {
              value: 1
            },
            size: {
              value: 5,
              random: {
                enable: true,
                minimumValue: 10
              }
            },
            rotate: {
              value: 0,
              direction: "clockwise",
              animation: {
                speed: 5,
                enable: true
              }
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              out_mode: "out"
            }
          },

          detectRetina: true,
          background: {
            color: "#fff"
          }
        }} />

      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Experience />
      <ContactMe />
      <Footer />

    </>
  )
}

export default App;
