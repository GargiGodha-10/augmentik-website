
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AISolutions from "./components/features";
import Resources from "./components/Resources";
import AIAssistant from "./components/AIAssistant";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Customer from "./components/Customer";
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
<Customer />
      <Footer />
    </main>
  );
}