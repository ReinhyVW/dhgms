import { FastForward, CheckCircle2, HeartHandshake, TrendingUp } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      title: 'Operate with more speed',
      description: 'Reduce manual steps and give staff one place to manage the workflows they handle every day.',
      icon: FastForward,
    },
    {
      title: 'Improve accuracy',
      description: 'Keep member and billing information more organized and easier to verify.',
      icon: CheckCircle2,
    },
    {
      title: 'Create a better member experience',
      description: 'Offer a smoother enrollment journey and better account support backed by clearer internal systems.',
      icon: HeartHandshake,
    },
    {
      title: 'Scale with more confidence',
      description: 'Build your growth on software that supports increasing membership volume and operational complexity.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What This Means for Your Team
          </h2>
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="flex flex-col">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
