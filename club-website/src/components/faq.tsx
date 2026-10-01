import { Plus } from 'lucide-react';
import { FAQ } from '@/lib/site';
import DiscordButton from './discord-button';
import SectionHeading from './section-heading';

const Faq = () => (
  <section id="faq" className="border-b-2 border-ink py-20 sm:py-28">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeading index="05" eyebrow="FAQ" title="Questions people ask first." />

      <div className="grid items-start gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
        <div className="border-t-2 border-ink">
          {FAQ.map((item) => (
            <details key={item.q} className="group border-b-2 border-ink">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-bold sm:text-2xl [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-2xl pb-7 text-lg leading-relaxed text-ink/75">{item.a}</p>
            </details>
          ))}
        </div>

        <aside className="sticker rounded-2xl bg-peach p-7 lg:rotate-2">
          <h3 className="font-display text-2xl font-bold">Something else?</h3>
          <p className="mt-2 mb-6 leading-relaxed text-ink/75">
            Ask in the Discord. A club officer or member will answer.
          </p>
          <DiscordButton label="Ask on Discord" />
        </aside>
      </div>
    </div>
  </section>
);

export default Faq;
