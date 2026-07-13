
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AISolutions from "./components/AISolutions";
import Resources from "./components/Resources";
import AIAssistant from "./components/AIAssistant";
import Pricing from "./components/component/components/Pricing";
import About from "./components/component/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AISolutions/>
      <Resources/>
      <AIAssistant/>
      <Pricing />
      <About/>
      <Footer />

    </main>
  );
}