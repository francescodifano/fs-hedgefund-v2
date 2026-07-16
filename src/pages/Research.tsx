import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import Button from '../components/Button'
import { usePageTitle } from '../lib/usePageTitle'

// Quarterly research reports. Navy cards carry a cover image, a title, and a
// light "Read" CTA — the same card language as Home's department grid.
const REPORTS = [
  {
    title: 'Q1 Report',
    image: 'research-2.jpg',
    desc: 'Our opening-quarter outlook — macro theses, sector positioning, and the ideas shaping the year ahead.',
  },
  {
    title: 'Q2 Report',
    image: 'research-3.jpg',
    desc: 'A mid-year review of portfolio performance, market structure, and the strategies driving our returns.',
  },
  {
    title: 'Q3 Report',
    image: 'research-4.jpg',
    desc: 'A deep dive into emerging opportunities and the disciplined risk management behind our latest positions.',
  },
]

export default function Research() {
  usePageTitle('Research')
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-end">
          <h1 className="font-display text-display text-navy">Research</h1>
          <p className="text-lead text-navy/80">
            Working as one, our members combine rigorous analysis with disciplined execution.
          </p>
        </div>
      </section>

      {/* Pull-quote */}
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <figure className="max-w-4xl">
            <blockquote className="font-display text-h1 font-bold text-navy">
              &ldquo;Research is formalized curiosity. It is poking and prying with a purpose.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-lead text-navy/70">
              &mdash; <cite className="font-sans font-extrabold not-italic text-navy">Zora Neale Hurston</cite>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Reports */}
      <section className="container-page py-16 md:py-24">
        <h2 className="font-display text-h1 font-bold text-navy">Reports</h2>
        <p className="mt-6 max-w-3xl text-lead text-navy/80">
          Each quarter we publish our latest equity research and market analysis, distilling the work of our
          departments into a single, readable report.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REPORTS.map((r) => (
            <article
              key={r.title}
              className="group flex flex-col overflow-hidden bg-navy text-white"
            >
              <img
                src={A(r.image)}
                alt={`Cover of the ${r.title}`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-h3 font-bold">{r.title}</h3>
                <p className="mt-3 flex-1 text-white/75">{r.desc}</p>
                <div className="mt-6">
                  <Button to="/contact" variant="light">
                    Read
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
