export function SolutionSection() {
  return (
    <section className="bg-slate-900 py-24 sm:py-32 text-center text-white relative overflow-hidden">
      {/* Abstract Background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-3xl rounded-full bg-blue-500 w-[800px] h-[400px]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            DHG Management Services Brings Your Operation Into One System
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            DHG Management Services gives your organization the software infrastructure to manage the full member lifecycle, from enrollment to billing, renewals, support, and reporting.
          </p>
          <p className="mt-4 text-lg leading-8 font-medium text-blue-100">
            Instead of relying on disconnected workarounds, your team can run the business from one platform designed specifically for DMPO workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
