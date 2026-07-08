
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AISolutions from "./components/AISolutions";
import Resources from "./components/Resources";
import AIAssistant from "./components/AIAssistant";
import About from "./components/component/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AISolutions/>
      <Resources/>
      <AIAssistant/>
      <About/>

    </main>
  );
}