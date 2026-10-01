import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import logo from '../../assets/tsc-logo.png';
import DiscordButton from './discord-button';

const RING_TEXT = 'Join the Discord ✦ Build something real ✦ Join the Discord ✦ Build something real ✦ ';

const Hero = ({ memberCount }: { memberCount: number | null }) => (
  <section id="top" className="relative overflow-hidden border-b-2 border-ink">
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:gap-8 lg:py-28">
      <div className="animate-rise">
        <p className="mb-6 inline-block rounded-full border-2 border-ink bg-peach px-4 py-1.5 font-mono text-xs uppercase tracking-widest">
          Student club · UW Tacoma
        </p>

        <h1 className="font-display text-5xl font-black leading-[0.95] sm:text-7xl lg:text-[5.25rem]">
          Build something <em className="text-ember">real</em> before you graduate.
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl">
          Tech Startup Club is a student-run club where developers and designers team up to
          build and ship software for real users. Everything happens in our Discord.
        </p>

        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <DiscordButton size="lg" />
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-2 py-3 font-semibold underline decoration-2 underline-offset-4 hover:text-ember"
          >
            See what we build
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {memberCount && (
          <p className="mt-6 font-mono text-sm text-ink/70">
            {memberCount} members in the server and counting
          </p>
        )}
      </div>

      <div
        className="relative mx-auto aspect-square w-64 animate-rise sm:w-80 lg:w-full lg:max-w-md"
        style={{ animationDelay: '120ms' }}
      >
        <svg
          viewBox="0 0 200 200"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full animate-spin-slow"
        >
          <defs>
            <path id="hero-ring" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" />
          </defs>
          <text className="fill-ink font-mono text-[9.5px] font-medium uppercase">
            <textPath href="#hero-ring" textLength="548" lengthAdjust="spacing">
              {RING_TEXT}
            </textPath>
          </text>
        </svg>
        <div className="sticker-lg absolute inset-[16%] flex items-center justify-center rounded-full bg-peach">
          <Image
            src={logo}
            alt="Tech Startup Club logo: the letters TSC shaped like a peach"
            priority
            sizes="(min-width: 1024px) 280px, 200px"
            className="h-[78%] w-[78%] -rotate-6 object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
