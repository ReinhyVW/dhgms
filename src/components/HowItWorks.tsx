export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Enroll Members',
      description: 'Guide prospects through a branded online signup flow designed to support plan sales and clean data capture.',
    },
    {
      number: '2',
      title: 'Manage Plans and Accounts',
      description: 'Keep member records, plan information, and operational details organized in one platform.',
    },
    {
      number: '3',
      title: 'Track Payments and Status',
      description: 'Monitor recurring billing activity, member status, renewals, and account changes with better visibility.',
    },
    {
      number: '4',
      title: 'Support Daily Operations',
      description: 'Give your team fast access to the tools they need for support, verification, reporting, and administration.',
    },
  ];

  return (
    <section className="bg-slate-900 py-24 sm:py-32 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 blur-3xl rounded-full bg-blue-500 w-[600px] h-[600px]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            How DHG Management Services Works
          </h2>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col relative text-center lg:text-left">
                <div className="mb-6 mx-auto lg:mx-0 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 ring-2 ring-white/20 text-blue-400 font-bold text-xl">
                  {step.number}
                </div>
                <dt className="text-xl font-semibold leading-8 text-white">
                  {step.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-300">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
