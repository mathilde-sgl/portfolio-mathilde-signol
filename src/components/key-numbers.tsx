//src/components/key-numbers.tsx

import FadeIn from "@/components/fade-in";

type KeyNumber = { number: string; label: string };

const cardProps = "flex flex-col gap-[var(--spacing-l)] bg-[var(--color-card)] border border-[var(--color-divider)] rounded-[var(--radius-ml)] px-[var(--spacing-l)] pb-[var(--spacing-xs)] pt-[var(--spacing-2xs)] h-full";
const sectionProps = "w-full space-y-[var(--spacing-ml)] pb-[var(--spacing-xl)] sm:pb-[var(--spacing-2xl)]";

export default function KeyNumbers({ title = "Chiffres clés", numbers }: { title?: string; numbers: KeyNumber[] }) {
  return (
    <section id="key-numbers" className={sectionProps}>
      <FadeIn><h2 className="h2">{title}</h2></FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[var(--spacing-2xl)]">
        {numbers.map((item, index) => (
          <FadeIn key={index} delay={(index + 1) * 100} className="h-full">
            <div className={cardProps}>
              <p className="h3 max-w-[720px] !text-[var(--color-primary)] pb-[var(--spacing-sm)]">{item.number}<br/>
                <span className="text1">{item.label}</span>
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
