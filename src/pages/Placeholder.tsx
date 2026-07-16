import Container from '../components/Container'
import { usePageTitle } from '../lib/usePageTitle'

// Temporary page for routes not yet rebuilt in the new responsive design.
export default function Placeholder({ title }: { title: string }) {
  usePageTitle(title)
  return (
    <Container className="flex min-h-[55vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-coral">In progress</p>
      <h1 className="mt-4 font-display text-h1 font-bold text-navy">{title}</h1>
      <p className="mt-4 max-w-md text-lead text-navy/70">
        This page is being rebuilt in the new responsive design and will be back shortly.
      </p>
    </Container>
  )
}
