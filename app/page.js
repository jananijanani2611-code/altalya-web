import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Courses from "./components/Courses";
import WhyUs from "./components/WhyUs";
import Training from "./components/Training";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyUs />
      <Training />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}