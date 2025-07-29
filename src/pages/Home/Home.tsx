import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Posts from '@/components/Posts/Posts';
import ScrollSmootherLayout from '@/components/ScrollSmootherLayout/ScrollSmootherLayout';
import Services from '@/components/Services/Services';

const Home = () => {
  return (
    <ScrollSmootherLayout>
      <Hero />
      <About />
      <Posts />
      <Services />
    </ScrollSmootherLayout>
  );
};

export default Home;
