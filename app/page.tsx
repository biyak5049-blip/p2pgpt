import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { Services } from "./components/services";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
