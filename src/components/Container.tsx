import type { ReactNode } from 'react'

// Page-width wrapper (fluid gutters, caps at the template's content width).
export default function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`container-page ${className}`}>{children}</div>
}
