import { MEMBER_COMPANIES } from '@/lib/site';

// Four copies so the -50% loop stays seamless on very wide screens.
const COPIES = [0, 1, 2, 3];

const CompanyMarquee = () => {
  const companies = MEMBER_COMPANIES;

  return (
    <section aria-label="Where our members work" className="border-b-2 border-ink bg-ink text-cream">
      <div className="flex items-stretch">
        <p className="z-10 hidden shrink-0 items-center border-r-2 border-cream/20 bg-ink px-6 font-mono text-xs uppercase tracking-widest text-cream/70 sm:flex">
          Members now at
        </p>
        <div className="overflow-hidden py-4">
          <div className="flex w-max animate-marquee">
            {COPIES.map((copy) => (
              <ul key={copy} aria-hidden={copy > 0} className="flex shrink-0 items-center">
                {companies.map((company) => (
                  <li
                    key={company}
                    className="flex items-center gap-8 pl-8 font-display text-2xl font-semibold whitespace-nowrap"
                  >
                    {company}
                    <span aria-hidden="true" className="text-tangerine">
                      ✦
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyMarquee;
