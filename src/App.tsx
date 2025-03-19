import About from "./components/About";
import Features from "./components/Features";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <section className="w-full h-screen bg-violet-200"></section>
    </main>
  );
}

export default App;
