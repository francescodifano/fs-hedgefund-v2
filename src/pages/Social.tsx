import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import StatBlock from '../components/StatBlock'
import { usePageTitle } from '../lib/usePageTitle'
import { MissionBand, DeptLeads, OtherDepartments, JoinCta } from '../components/DeptSections'

// Media & Community, rebuilt on the department-page template. Only real
// photos are used (event shots); the AI-generated format tiles are gone and
// the formats render as text cards in the process-box style instead.
const FORMATS = [
  {
    title: 'Index Insider',
    desc: 'We take our audience behind the scenes of the index construction process. From the first screening call to the final weighting decision, Index Insider documents how a real financial product gets built, step by step, by students.',
  },
  {
    title: 'Student meets Professional',
    desc: 'Short-form interviews with finance professionals, fund managers, and industry insiders. Real questions, real answers, no fluff. A window into careers and perspectives beyond the lecture hall.',
  },
  {
    title: 'Market in 60',
    desc: 'One market development. Sixty seconds. Every week we break down what moved markets, why it matters, and what to watch next. Fast enough to watch between lectures, sharp enough to actually learn something.',
  },
  {
    title: 'Finance 101',
    desc: 'Not everyone starts with a Bloomberg terminal. Finance 101 breaks down core concepts, from duration to derivatives, in plain language. Built for students and everyone who is just getting started.',
  },
]

export default function Social() {
  usePageTitle('Media & Community')
  return (
    <article>
      {/* Hero: real event photo with the department name band */}
      <section className="relative">
        <img
          src={A('soc-8.jpg')}
          alt=""
          className="h-[48vw] max-h-[520px] min-h-[240px] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy/10" />
        <div className="absolute inset-x-0 bottom-0 translate-y-1/2">
          <div className="container-page">
            <h1 className="inline-block bg-navy px-8 py-5 font-display text-h1 font-bold text-white sm:px-12 sm:py-6">
              Media &amp; Community
            </h1>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container-page pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-4xl">
          <p className="font-sans text-sm font-bold tracking-wide text-navy/60">Department 05</p>
          <h2 className="mt-3 font-display text-h1 font-bold text-navy">About</h2>
          <div className="mt-5 h-px w-full bg-navy/15" />
          <p className="mt-8 text-lead text-navy/85">
            Reach isn't a coincidence, we build it. Our social media platforms document the work of the initiative
            throughout the year, from investment research and educational content to member life and events, turning
            what happens inside the Hedge Fund, Trading &amp; Derivatives, and Index Construction departments into
            content people actually want to follow. From explaining how an index gets built to 60-second market
            updates, we make finance accessible to a student audience and beyond.
          </p>
        </div>
      </section>

      {/* Reach numbers */}
      <section className="container-page pb-16 md:pb-20">
        <div className="grid grid-cols-2 gap-6 border-y border-navy/10 py-10 sm:grid-cols-4 sm:gap-10">
          <StatBlock value="~1,000" label="Followers" />
          <StatBlock value="12,000+" label="Views / Month" />
          <StatBlock value="1,600+" label="Reach / Month" />
          <StatBlock value="850+" label="Avg. Post Reach" />
        </div>
      </section>

      {/* Our Formats: text cards in the process-box style (no AI imagery) */}
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h1 font-bold text-navy">Our Formats</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {FORMATS.map((f) => (
              <div key={f.title} className="bg-navy p-7 text-white md:p-8">
                <h3 className="font-sans text-2xl font-extrabold">{f.title}</h3>
                <p className="mt-4 text-white/85">{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Events: real photos */}
      <section className="container-page py-16 md:py-24">
        <h2 className="font-display text-h1 font-bold text-navy">Our Events</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <img
            src={A('soc-9.jpg')}
            alt="A full lecture hall at an FS Student Hedge Fund session"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <img
            src={A('soc-10.jpg')}
            alt="Members networking at an FS Student Hedge Fund event"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <MissionBand>Building the brand outward through social media, content, and partnerships.</MissionBand>
      <DeptLeads names={['Helena Morris', 'Linh Pham']} />
      <OtherDepartments current="/social" />
      <JoinCta dept="Media & Community" />
    </article>
  )
}
