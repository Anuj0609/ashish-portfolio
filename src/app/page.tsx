import Intro from "./components/Intro";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import CoverLetter from "./components/CoverLetter";
import Education from "./components/Education";

export default function Home() {
  return <div className="text-white">

    <Navbar/>
    <Intro/>
    <About/>
    <Portfolio/>
    <Skills/>
    <CoverLetter/>
    <Education/>
  </div>;
}
