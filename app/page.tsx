import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Results from "@/components/Results";
import WhyUs from "@/components/WhyUs";
import Faculty from "@/components/Faculty";
import Schedule from "@/components/Schedule";
import Admission from "@/components/Admission";
import Testimonials from "@/components/Testimonials";
import Campus from "@/components/Campus";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Courses />
      <Results />
      <WhyUs />
      <Faculty />
      <Schedule />
      <Admission />
      <Testimonials />
      <Campus />
      <Faq />
      <Footer />
    </main>
  );
}
