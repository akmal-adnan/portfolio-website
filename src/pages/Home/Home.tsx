import About from '@/components/About/About';
import ScrollSmootherLayout from '@/components/common/ScrollSmootherLayout/ScrollSmootherLayout';
import { Footer } from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Posts from '@/components/Posts/Posts';
import Services from '@/components/Services/Services';

const Home = () => {
  return (
    <ScrollSmootherLayout>
      <Hero />
      <About />
      <Posts />
      <Services />
      <Footer />
    </ScrollSmootherLayout>
  );
};

export default Home;
