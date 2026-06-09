export function TrustedBy() {
  return (
    <section
      className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="trusted-by-heading"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2
          id="trusted-by-heading"
          className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
        >
          Built for Modern Operations Teams
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Designed for companies that want to eliminate repetitive operational
          work and let AI handle routine processes.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="flex h-12 w-24 items-center justify-center rounded-lg bg-slate-100 text-slate-400"
              aria-hidden
            >
              <span className="text-xs font-medium">Logo</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
