import { Layers, ServerCog, Expand, Star } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      title: 'Built for DMPOs',
      description: 'This is not generic membership software adapted after the fact. It is designed around how discount medical plan organizations actually operate.',
      icon: Layers,
    },
    {
      title: 'Centralized operations',
      description: 'Bring enrollment, billing, member administration, and reporting into a single environment.',
      icon: ServerCog,
    },
    {
      title: 'Flexible for growth',
      description: 'As your organization expands, your platform should support more members, more plans, and more workflow complexity without forcing your team into manual processes.',
      icon: Expand,
    },
    {
      title: 'Professional member-facing experience',
      description: 'Present a more modern, reliable experience for prospective and current members.',
      icon: Star,
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg lg:sticky lg:top-32">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why Organizations Choose DHG Management Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                A purpose-built platform designed specifically to handle the administrative and operational demands of growing DMPOs.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="flex gap-x-6 bg-slate-50 p-6 rounded-2xl ring-1 ring-slate-200/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-8 text-slate-900">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
