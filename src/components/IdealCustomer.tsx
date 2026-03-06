import { CheckCircle2 } from 'lucide-react';

export function IdealCustomer() {
  const useCases = [
    {
      title: 'New member enrollment',
      description: 'Create a smoother path from interest to activation with a guided, branded online experience.',
    },
    {
      title: 'Member support',
      description: 'Help your team find member details faster and resolve status questions with confidence.',
    },
    {
      title: 'Billing oversight',
      description: 'Reduce uncertainty around renewals, recurring charges, and delinquent accounts.',
    },
    {
      title: 'Operational administration',
      description: 'Manage plan structures, account records, and team workflows from one connected system.',
    },
    {
      title: 'Business reporting',
      description: 'Get a clearer view of how your DMPO is performing and where operational attention is needed.',
    },
  ];

  const profiles = [
    'Discount Medical Plan Organizations',
    'Membership-based healthcare businesses',
    'Teams managing recurring plan enrollments',
    'Organizations that need branded enrollment plus back-office administration',
    'Growing operations replacing manual workflows',
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Who DHG Management Services Is For
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              DHG Management Services is built for organizations that need more structure, visibility, and control in their discount medical plan operations.
            </p>
            
            <div className="mt-8 rounded-2xl bg-white p-8 ring-1 ring-slate-200">
              <h3 className="font-semibold text-slate-900">Ideal for:</h3>
              <ul className="mt-4 space-y-4">
                {profiles.map((profile, i) => (
                  <li key={i} className="flex gap-x-3 text-sm leading-6 text-slate-700">
                    <CheckCircle2 className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                    <span>{profile}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-8 pt-2">
              Support the Workflows That Matter Most
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => (
                <div key={i} className="relative pl-4 border-l-2 border-slate-200 hover:border-blue-600 transition-colors">
                  <h4 className="font-semibold text-slate-900">{useCase.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
