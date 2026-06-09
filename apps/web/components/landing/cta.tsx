import Link from "next/link";

export function CTA() {
  return (
    <section
      className="border-b border-slate-200 bg-slate-900 px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="cta-heading"
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Start Automating Your Operations Today
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Connect your tools, enable AI automation, and eliminate repetitive
          operational work.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Start Free
          </Link>
          <Link
            href="/demo"
            className="inline-flex w-full items-center justify-center rounded-lg border border-slate-500 bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            Schedule Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
