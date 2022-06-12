import About from "../components/About/about";
import Header from "../components/Header/header";
import Home from "../components/Home/home";

export default function HomePage() {
    return <div className="main_container">
        <Header />
        <Home />
        <About />
    </div>
}