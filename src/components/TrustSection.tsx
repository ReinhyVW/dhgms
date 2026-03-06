import { Layers, Zap, UserCheck, Shield } from 'lucide-react';

export function TrustSection() {
  const points = [
    { name: 'Centralized operational control', icon: Layers },
    { name: 'Faster internal response times', icon: Zap },
    { name: 'More consistent member administration', icon: UserCheck },
    { name: 'Better visibility across the business', icon: Shield },
  ];

  return (
    <section className="bg-slate-900 py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Built for organizations that need structure, reliability, and room to grow.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            DHG Management Services helps replace fragmented workflows with a connected operating platform for DMPO administration.
          </p>
        </div>
        
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.name} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-sm font-medium leading-6 text-slate-200">
                  {point.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
