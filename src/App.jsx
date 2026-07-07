import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappFab from "./components/WhatsappFab";

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-[#f5f8fc]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Process />
        <Clients />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
