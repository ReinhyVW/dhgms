import { AlertCircle } from 'lucide-react';

export function ProblemSection() {
  const challenges = [
    'Member data spread across multiple tools',
    'Time-consuming payment tracking',
    'Limited visibility into active and inactive members',
    'Slow status verification and support response times',
    'Enrollment processes that feel outdated',
    'Difficulty managing plans, agencies, and internal workflows at scale'
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Most DMPOs Outgrow Manual Operations
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              When your organization depends on spreadsheets, disconnected systems, manual payment follow-up, and scattered member records, growth becomes harder to manage.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Your team ends up spending too much time on administrative work instead of improving operations and serving members.
            </p>
          </div>

          <div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <h3 className="text-sm font-semibold leading-7 text-rose-600 uppercase tracking-wide">
                Common operational challenges
              </h3>
              <ul className="mt-6 space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex gap-x-3 text-base leading-7 text-slate-700">
                    <AlertCircle className="h-6 w-5 flex-none text-rose-500" aria-hidden="true" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
