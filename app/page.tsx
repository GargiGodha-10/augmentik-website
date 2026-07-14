
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Resources from "./components/Resources";
import AIAssistant from "./components/AIAssistant";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
<Hero />
      <Resources/>
      <AIAssistant/>
      <Pricing />
      <About/>
      <Footer />

    </main>
  );
}