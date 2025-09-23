import About from '@/components/About/About';
import { Footer } from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Posts from '@/components/Posts/Posts';
import Services from '@/components/Services/Services';

const Home = () => {
  return (
    // <ScrollSmootherLayout>
    <div>
      <Hero />
      <About />
      <Posts />
      <Services />
      <Footer />
    </div>
    // </ScrollSmootherLayout>
  );
};

export default Home;
