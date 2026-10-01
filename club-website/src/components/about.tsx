import { PILLARS } from '@/lib/site';
import SectionHeading from './section-heading';

const About = () => (
  <section id="about" className="border-b-2 border-ink py-20 sm:py-28">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeading
        index="01"
        eyebrow="What we do"
        title={
          <>
            Class projects end up in a folder. Ours end up <em className="text-ember">in use.</em>
          </>
        }
        lede="We run like a small product team. You get the parts of software work a classroom can't give you: teammates, code review, deadlines, and users."
      />

      <ol className="grid gap-6 md:grid-cols-3">
        {PILLARS.map((pillar, i) => (
          <li key={pillar.title} className="sticker rounded-2xl bg-white p-7">
            <span className="font-display text-5xl font-black text-tangerine">0{i + 1}</span>
            <h3 className="mt-4 font-display text-2xl font-bold">{pillar.title}</h3>
            <p className="mt-3 leading-relaxed text-ink/75">{pillar.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default About;
