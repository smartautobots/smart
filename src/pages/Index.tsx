import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Categories from '@/components/Categories';
import Timeline from '@/components/Timeline';
import Prizes from '@/components/Prizes';
import Registration from '@/components/Registration';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
      <Categories />
      <Timeline />
      <Prizes />
      <Registration />
      <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
