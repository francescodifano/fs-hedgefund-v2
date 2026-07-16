import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'solid' | 'light'
type Props = {
  children: ReactNode
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: Variant
  className?: string
}

const base =
  'inline-flex items-center justify-center px-7 py-3.5 font-sans font-extrabold text-[1.05rem] transition-transform duration-150 active:scale-[.98]'
const variants: Record<Variant, string> = {
  solid: 'bg-navy text-white hover:bg-navy/90',
  light: 'bg-white text-navy hover:bg-mist',
}

// One button, used for every CTA (Submit, Get Report, Learn more, Apply…).
export default function Button({ children, to, href, onClick, type = 'button', variant = 'solid', className = '' }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} onClick={onClick}>{children}</Link>
  if (href) return <a href={href} className={cls} onClick={onClick}>{children}</a>
  return <button type={type} className={cls} onClick={onClick}>{children}</button>
}
