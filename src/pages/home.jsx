import Header from "../components/header"
import Intro from "../components/intro"
import Services from "../components/services"
import About from "../components/about"
import Skills from "../components/skills"
import Blog from "../components/blog"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home(){
    return (
        <>
        <Header />
        <Intro />
        <Services />
        <About />
        <Skills />
        <Blog />
        <Contact />
        <Footer />
        </>
    )
}