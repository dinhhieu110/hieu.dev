import { lazy, Suspense } from "react";

const Hero = lazy(() => import("../components/Modules/portfolio/hero/Hero"));
const Services = lazy(() => import("../components/Modules/portfolio/services/Services"));
const Projects = lazy(() => import("../components/Modules/portfolio/projects/Projects"));
const Contact = lazy(() => import("../components/Modules/portfolio/contact//Contact"
));

const Portfolio = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <section id="home" className="h-screen snap-center">
          <Hero />
        </section>

        <section id="services" className="h-screen snap-center scroll-mt-20">
          <Services />
        </section>

        <section id="portfolio" className="h-[600vh] snap-center scroll-mt-20">
          <Projects />
        </section>

        <section id="contact" className="h-screen snap-center scroll-mt-20">
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default Portfolio;
