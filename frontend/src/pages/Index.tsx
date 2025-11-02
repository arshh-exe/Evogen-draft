import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImportantDates from "@/components/ImportantDates";
import Events from "@/components/Events";
import Committee from "@/components/Committee";
import Gallery from "@/components/Gallery";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <ImportantDates />
      <Events />
      <Committee />
      <Gallery />
      <Venue />
      <Footer />
    </div>
  );
};

export default Index;
