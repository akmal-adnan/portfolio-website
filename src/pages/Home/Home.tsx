import About from '@/components/About/About';
import SmoothScrollGsap from '@/components/common/SmoothScrollGsap/SmoothScrollGsap';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Posts from '@/components/Posts/Posts';
import Services from '@/components/Services/Services';

const Home = () => {
  return (
    <SmoothScrollGsap>
      <Hero />
      <About />
      <Posts />
      <Services />
      <Footer />
    </SmoothScrollGsap>
  );
};

export default Home;
