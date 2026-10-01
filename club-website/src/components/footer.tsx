import Image from 'next/image';
import { Github } from 'lucide-react';
import logo from '../../assets/tsc-logo.png';
import { DISCORD_URL, GITHUB_URL, NAV_LINKS } from '@/lib/site';
import { DiscordIcon } from './discord-button';

const Footer = () => (
  <footer className="bg-peach">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <Image src={logo} alt="" width={48} height={48} />
        <div>
          <p className="font-display text-xl font-bold">Tech Startup Club</p>
          <p className="text-sm text-ink/70">University of Washington Tacoma</p>
        </div>
      </div>

      <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="underline-offset-4 hover:underline">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tech Startup Club on Discord"
          className="sticker flex h-11 w-11 items-center justify-center rounded-full bg-tangerine transition-transform hover:-translate-y-0.5"
        >
          <DiscordIcon className="h-5 w-5" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tech Startup Club on GitHub"
          className="sticker flex h-11 w-11 items-center justify-center rounded-full bg-cream transition-transform hover:-translate-y-0.5"
        >
          <Github className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
