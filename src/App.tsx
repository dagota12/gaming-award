import About from "./components/About";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <section className="w-full h-screen bg-violet-200"></section>
    </main>
  );
}

export default App;
