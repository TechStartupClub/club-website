interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
}

const SectionHeading = ({ index, eyebrow, title, lede, dark = false }: SectionHeadingProps) => (
  <div className="mb-12 max-w-3xl sm:mb-16">
    <p
      className={`mb-4 font-mono text-xs uppercase tracking-widest ${dark ? 'text-tangerine' : 'text-leaf'}`}
    >
      {index} / {eyebrow}
    </p>
    <h2 className="font-display text-4xl font-black leading-[1.02] sm:text-6xl">{title}</h2>
    {lede && (
      <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-cream/75' : 'text-ink/75'}`}>
        {lede}
      </p>
    )}
  </div>
);

export default SectionHeading;
