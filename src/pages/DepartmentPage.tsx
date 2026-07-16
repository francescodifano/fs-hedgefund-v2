import { asset as A } from '../lib/asset'
import { DEPARTMENTS_DATA } from '../lib/departments'
import { usePageTitle } from '../lib/usePageTitle'

// Shared, responsive template for all department pages: image hero with a navy
// name band, then an "About" section with the department's copy.
export default function DepartmentPage({ slug }: { slug: string }) {
  const d = DEPARTMENTS_DATA[slug]
  usePageTitle(d.name)

  return (
    <article>
      <section className="relative">
        <img
          src={A(d.hero)}
          alt=""
          className="h-[48vw] max-h-[520px] min-h-[240px] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy/10" />
        <div className="absolute inset-x-0 bottom-8 flex justify-center px-4 md:bottom-12">
          <h1 className="bg-navy px-6 py-4 text-center font-display text-h1 font-bold text-white sm:px-10">{d.name}</h1>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <h2 className="font-display text-h1 font-bold text-navy">About</h2>
        <div className="mt-5 h-px w-full bg-navy/15" />
        <div className="mt-8 max-w-4xl space-y-5 text-lead text-navy/85">
          {d.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </article>
  )
}
