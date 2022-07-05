import About from "../components/About/about";
import Contact from "../components/Contact/contact";
import Experience from "../components/Experience/experience";
import Header from "../components/Header/header";
import Home from "../components/Home/home";
import Projects from "../components/Projects/projects";

export default function HomePage() {
    return <div className="main_container">
        <Header />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
    </div>
}