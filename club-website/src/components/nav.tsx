import Image from 'next/image';
import logo from '../../assets/tsc-logo.png';
import { NAV_LINKS } from '@/lib/site';
import DiscordButton from './discord-button';

const Nav = () => (
  <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/90 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <a href="#top" className="flex items-center gap-2.5">
        <Image src={logo} alt="" width={36} height={36} priority />
        <span className="hidden font-display text-lg font-bold min-[400px]:inline">Tech Startup Club</span>
      </a>

      <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <DiscordButton size="sm" label="Join Discord" />
    </div>
  </header>
);

export default Nav;
