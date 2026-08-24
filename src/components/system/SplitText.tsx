'use client'

/**
 * Per-character text animation.
 *
 * Accessibility contract: the whole string is announced once from the parent's
 * aria-label, and every individual character is hidden from assistive tech.
 * Without this a screen reader spells the word out letter by letter.
 */
export function SplitText({
  text,
  className,
  charClassName,
  delayStep = 34,
  startDelay = 0,
  as: Tag = 'span',
}: {
  text: string
  className?: string
  charClassName?: string
  delayStep?: number
  startDelay?: number
  as?: 'span' | 'h1' | 'h2' | 'p'
}) {
  const chars = Array.from(text)
  return (
    <Tag className={className} aria-label={text}>
      {chars.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          aria-hidden="true"
          className={charClassName}
          style={{ animationDelay: `${startDelay + i * delayStep}ms` }}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </Tag>
  )
}
