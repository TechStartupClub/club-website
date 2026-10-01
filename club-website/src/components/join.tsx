import { JOIN_STEPS } from '@/lib/site';
import DiscordButton from './discord-button';
import SectionHeading from './section-heading';

const Join = ({ memberCount }: { memberCount: number | null }) => (
  <section id="join" className="border-b-2 border-ink bg-ink py-20 text-cream sm:py-28">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <SectionHeading
        dark
        index="04"
        eyebrow="How to join"
        title={
          <>
            Three steps. The first one takes <em className="text-tangerine">ten seconds.</em>
          </>
        }
      />

      <ol className="grid gap-6 md:grid-cols-3">
        {JOIN_STEPS.map((step, i) => (
          <li key={step.title} className="rounded-2xl border-2 border-cream/25 p-7">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tangerine font-mono text-sm font-bold text-ink">
              {i + 1}
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-cream/75">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
        <DiscordButton size="lg" tone="dark" />
        <p className="text-cream/75">
          {memberCount ? `${memberCount} members are already in there. ` : ''}
          Everyone is welcome.
        </p>
      </div>
    </div>
  </section>
);

export default Join;
