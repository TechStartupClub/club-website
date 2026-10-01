import { MEMBERS } from '@/lib/site';
import SectionHeading from './section-heading';

const MONOGRAM_COLORS = ['bg-tangerine', 'bg-leaf text-cream', 'bg-peach'];

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('');

const Members = () => {
  const quoted = MEMBERS.filter((member) => member.quote);

  return (
    <section id="members" className="border-b-2 border-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Member spotlight"
          title="Where our members landed."
          lede="Club projects turn into resume lines, interview stories, and jobs. Here is where some of our members work now."
        />

        <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {MEMBERS.map((member, i) => (
            <li
              key={member.name}
              className="sticker flex items-center gap-5 rounded-2xl bg-white p-5 transition-transform duration-200 hover:-translate-y-1 sm:p-6"
            >
              <span
                aria-hidden="true"
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border-2 border-ink font-display text-2xl font-black ${MONOGRAM_COLORS[i % MONOGRAM_COLORS.length]}`}
              >
                {initials(member.name)}
              </span>
              <div>
                <h3 className="font-display text-xl leading-tight font-bold">{member.name}</h3>
                <p className="mt-1 text-sm text-ink/75">{member.role}</p>
                <p className="mt-2 inline-block rounded-full bg-ink px-3 py-1 text-xs font-semibold text-cream">
                  @ {member.company}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="mt-16 grid gap-10 md:grid-cols-2">
          {quoted.map((member) => (
            <li key={member.name}>
              <figure className="border-l-4 border-tangerine pl-6">
                <blockquote className="font-display text-xl leading-snug font-medium italic">
                  &ldquo;{member.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest text-ink/70">
                  {member.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Members;
