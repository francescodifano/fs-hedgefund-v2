import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import { usePageTitle } from '../lib/usePageTitle'

const STEPS = [
  { n: '01', title: 'Screening', desc: 'Systematic top-down screening across global sectors to identify investable themes and structural opportunities.' },
  { n: '02', title: 'Research', desc: 'Pod-based bottom-up analysis of individual securities, scored and ranked against a defined set of criteria.' },
  { n: '03', title: 'Construction', desc: 'Formal index construction covering weighting methodology, rebalancing rules, and a full performance backtest.' },
  { n: '04', title: 'Calculation', desc: 'Independent index calculation and administration by Solactive, ensuring full methodology transparency and regulatory compliance.' },
  { n: '05', title: 'Issuance', desc: 'Structured product issuance under UniCredit’s onemarkets platform, bringing the index to market as a publicly tradable financial product.' },
]

// Index Construction — the richest department page (hero + intro + process),
// so it gets its own component rather than the shared DepartmentPage template.
export default function IndexConstruction() {
  usePageTitle('Index Construction')
  return (
    <article>
      <section className="relative">
        <img
          src={A('indexconstruction-3.jpg')}
          alt=""
          className="h-[48vw] max-h-[520px] min-h-[240px] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy/10" />
        <div className="absolute inset-x-0 bottom-8 flex justify-center px-4 md:bottom-12">
          <h1 className="bg-navy px-6 py-4 text-center font-display text-h1 font-bold text-white sm:px-10">Index Construction</h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="max-w-4xl space-y-6 text-lead text-navy/85">
          <p>
            The Index Construction Department designs and launches publicly tradable financial indices, taking ideas
            from raw sector research all the way through to a live, investable product.
          </p>
          <p>
            Our process follows a rigorous top-down methodology: systematic market screening, pod-based sector
            research, disciplined asset selection, and formal index construction by our Structuring Desk.
          </p>
          <p className="font-display text-h3 font-bold text-navy">
            In partnership with Solactive and UniCredit, we build real financial products — not simulations.
          </p>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h1 font-bold text-navy">Our Process</h2>
          <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s) => (
              <li key={s.n} className="border-t-2 border-navy/20 pt-5">
                <div className="font-display text-3xl font-bold text-coral">{s.n}</div>
                <h3 className="mt-2 font-display text-h3 font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-navy/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </article>
  )
}
