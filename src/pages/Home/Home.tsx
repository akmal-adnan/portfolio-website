import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Posts from '@/components/Posts/Posts';
import ScrollSmootherLayout from '@/components/ScrollSmootherLayout/ScrollSmootherLayout';

const Home = () => {
  return (
    <ScrollSmootherLayout>
      <Hero />
      <About />
      <Posts />
      <About />
    </ScrollSmootherLayout>
  );
};

export default Home;
