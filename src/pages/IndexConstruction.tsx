import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import { usePageTitle } from '../lib/usePageTitle'

const STEPS = [
  { n: '01', title: 'Universe Definition', desc: 'Defining the eligible security universe based on market, sector, and liquidity criteria. Clear inclusion and exclusion rules ensure a transparent and replicable starting point.' },
  { n: '02', title: 'Methodology Design', desc: 'Developing the weighting scheme, selection rules, and rebalancing frequency — designed to capture specific exposures while maintaining investability and minimizing turnover.' },
  { n: '03', title: 'Backtesting & Analysis', desc: 'Rigorous historical simulation to evaluate index behaviour across market regimes. Performance, risk characteristics, and factor exposures are analysed to validate the methodology.' },
  { n: '04', title: 'Maintenance & Rebalancing', desc: 'Ongoing index maintenance — periodic rebalancing, corporate action handling, and methodology reviews to ensure continued accuracy and relevance.' },
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
            Our process follows a rigorous, transparent methodology — from defining the eligible universe and
            designing weighting schemes to backtesting across market regimes and maintaining each index through
            disciplined rebalancing.
          </p>
          <p className="font-display text-h3 font-bold text-navy">
            In partnership with Solactive and UniCredit, we build real financial products — not simulations.
          </p>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h1 font-bold text-navy">Our Process</h2>
          <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="border-t-2 border-navy/20 pt-5">
                <div className="font-display text-3xl font-bold text-navy/40">{s.n}</div>
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
