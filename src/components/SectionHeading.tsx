import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  serif?: boolean
  rule?: boolean
  className?: string
}

// Repeated section title (serif by default), with an optional underline rule.
export default function SectionHeading({ children, as: Tag = 'h2', serif = true, rule = false, className = '' }: Props) {
  return (
    <div className={className}>
      <Tag className={`${serif ? 'font-display' : 'font-sans'} text-h2 font-bold text-navy`}>{children}</Tag>
      {rule && <div className="mt-4 h-px w-full bg-navy/15" />}
    </div>
  )
}
