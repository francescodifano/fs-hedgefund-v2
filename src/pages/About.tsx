import { asset as A } from '../lib/asset'
import Container from '../components/Container'
import Button from '../components/Button'
import { usePageTitle } from '../lib/usePageTitle'

export default function About() {
  usePageTitle('About')
  return (
    <>
      {/* Hero */}
      <section className="container-page pt-12 md:pt-16">
        <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-end">
          <h1 className="font-display text-display text-navy">
            Serious About Finance?
            <br />
            So Are We.
          </h1>
          <div>
            <p className="text-lead text-navy/80">
              Frankfurt School's student-managed investment fund — where academic rigor meets real capital.
            </p>
            <div className="mt-8">
              <Button to="/contact">Apply</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-mist py-16 md:py-24">
        <Container>
          <h2 className="font-display text-h1 font-bold text-navy">Our Mission</h2>
          <div className="mt-8 max-w-4xl space-y-5 text-lead text-navy/85">
            <p>
              FS Student Hedge Fund is Frankfurt School's student-managed investment initiative; a selective team
              operating across three departments: Hedge Fund, Trading &amp; Derivatives, and Index Construction.
              Together, we apply institutional-grade strategies to real markets — from developing macro theses and
              managing derivative portfolios to constructing structured indices in collaboration with industry
              partners like Solactive and UniCredit.
            </p>
            <p>
              Our members don't just study markets, they research them, model them, and take positions in them. We
              exist to bridge the gap between academic rigor and real-world capital markets practice, developing the
              next generation of investment talent from the ground up.
            </p>
          </div>
        </Container>
      </section>

      {/* Pull quote */}
      <section className="bg-navy text-white">
        <Container className="py-16 md:py-24">
          <figure className="mx-auto max-w-4xl text-center">
            <blockquote className="font-display text-h2 italic">
              "Coming together is a beginning; keeping together is progress; working together is success."
            </blockquote>
            <figcaption className="mt-8 font-sans font-extrabold text-coral">Henry Ford</figcaption>
          </figure>
        </Container>
      </section>

      {/* Team */}
      <section className="container-page py-16 md:py-24">
        <h2 className="font-display text-h1 font-bold text-navy">Our Team</h2>
        <figure className="mt-10">
          <img
            src={A('home-3.jpg')}
            alt="The FS Student Hedge Fund team together"
            className="aspect-[3/2] w-full object-cover"
            loading="lazy"
          />
        </figure>
      </section>
    </>
  )
}
