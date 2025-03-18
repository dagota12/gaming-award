import About from "./components/About";
import { Hero } from "./components/Hero";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Hero />
      <About />
      <section className="w-full h-screen bg-violet-200"></section>
    </main>
  );
}

export default App;
