import { cn } from '@/lib/utils';

type SectionTag = 'section' | 'div' | 'article' | 'aside';

interface SectionProps {
  /** HTML element to render. Defaults to "section". */
  as?: SectionTag;
  id?: string;
  /** Classes added to the outer element. */
  className?: string;
  /** Classes added to the inner container-pad div. */
  containerClassName?: string;
  children: React.ReactNode;
  /** Skip the default section-pad (py-16 md:py-24) vertical padding. */
  noPad?: boolean;
  /** Skip the inner container-pad wrapper. */
  noContainer?: boolean;
  /** Accessible label for the section (aria-label). */
  label?: string;
}

/**
 * Reusable section wrapper that applies `section-pad` and `container-pad`
 * by default. Use `noPad` or `noContainer` to opt out of either.
 *
 * Uses an 8px spacing grid (py-16 = 64px, py-24 = 96px).
 *
 * @example
 * <Section className="bg-mc-sage">
 *   <h2>...</h2>
 * </Section>
 *
 * @example
 * <Section noContainer noPad className="bg-mc-forest">
 *   <div className="container-pad py-12">...</div>
 * </Section>
 */
export function Section({
  as: Tag = 'section',
  id,
  className,
  containerClassName,
  children,
  noPad = false,
  noContainer = false,
  label,
}: SectionProps) {
  return (
    <Tag
      id={id}
      aria-label={label}
      className={cn(!noPad && 'section-pad', className)}
    >
      {noContainer ? (
        children
      ) : (
        <div className={cn('container-pad', containerClassName)}>
          {children}
        </div>
      )}
    </Tag>
  );
}

export default Section;
