import Hero from '../components/home/Hero';
import Skills from '../components/home/Skills';
import Experience from '../components/home/Experience';
import Projects from '../components/home/Projects';
import ServicesSection from '../components/home/ServicesSection';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const Home = () => {
    return (
        <div className="bg-background min-h-screen">
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <ServicesSection />
            <Testimonials />
            <Contact />
        </div>
    );
};
export default Home;
