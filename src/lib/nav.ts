// Single source of truth for navigation — used by the header, mobile menu and footer.

export type NavItem = { label: string; to: string }

export const DEPARTMENTS: NavItem[] = [
  { label: 'Index Construction', to: '/index-construction' },
  { label: 'Hedge Fund', to: '/hedge-fund' },
  { label: 'Derivatives & Trading', to: '/derivatives' },
  { label: 'Quant', to: '/quant' },
  { label: 'Media & Community', to: '/social' },
]

export const FOOTER_PAGES: NavItem[] = [
  { label: 'Newsroom', to: '/newsroom' },
  { label: 'Research', to: '/research' },
  { label: 'Index Construction', to: '/index-construction' },
  { label: 'Hedge Fund', to: '/hedge-fund' },
  { label: 'Derivatives & Trading', to: '/derivatives' },
  { label: 'Quant', to: '/quant' },
  { label: 'Media & Community', to: '/social' },
  { label: 'About', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
]
