import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import FreelanceWork from "./components/FreelanceWork";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AmbientBackground from "./components/AmbientBackground";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:text-sm font-medium"
      >
        Skip to content
      </a>
      <AmbientBackground />
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <FreelanceWork />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
