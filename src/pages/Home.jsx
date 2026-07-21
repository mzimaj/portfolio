import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import FeaturedProjectPreview from "../components/FeaturedProjectPreview";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <FeaturedProjectPreview />
      <CallToAction />
    </main>
  );
}

export default Home;