import About from '@/components/about';
import CompanyMarquee from '@/components/company-marquee';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Join from '@/components/join';
import Members from '@/components/members';
import Nav from '@/components/nav';
import Projects from '@/components/projects';
import { getDiscordMemberCount } from '@/lib/discord';

const Home = async () => {
  const memberCount = await getDiscordMemberCount();

  return (
    <>
      <Nav />
      <main>
        <Hero memberCount={memberCount} />
        <CompanyMarquee />
        <About />
        <Projects />
        <Members />
        <Join memberCount={memberCount} />
        <Faq />
      </main>
      <Footer />
    </>
  );
};

export default Home;
