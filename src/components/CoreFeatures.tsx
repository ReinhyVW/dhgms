import { UserPlus, Users, RefreshCw, ShieldCheck, Settings, Briefcase, BarChart3 } from 'lucide-react';

export function CoreFeatures() {
  const features = [
    {
      name: 'Branded Enrollment Portal',
      description: 'Create a professional online enrollment experience that reflects your organization and helps convert prospects into active members.',
      icon: UserPlus,
    },
    {
      name: 'Member Management',
      description: 'Maintain organized member records with fast search tools, status visibility, and key account details in one place.',
      icon: Users,
    },
    {
      name: 'Recurring Billing Management',
      description: 'Support subscription-based operations with workflows for payment tracking, renewals, and delinquency monitoring.',
      icon: RefreshCw,
    },
    {
      name: 'Status Lookup and Verification',
      description: 'Allow authorized users to quickly confirm whether a member is active, inactive, pending, or terminated.',
      icon: ShieldCheck,
    },
    {
      name: 'Plan Administration',
      description: 'Configure plan offerings, pricing structures, effective dates, and operational rules with more control.',
      icon: Settings,
    },
    {
      name: 'Agency and Staff Tools',
      description: 'Equip internal teams and partner agencies with structured access to the information they need to work efficiently.',
      icon: Briefcase,
    },
    {
      name: 'Reporting and Business Visibility',
      description: 'Track key operational metrics including enrollments, payment activity, member counts, and plan performance.',
      icon: BarChart3,
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A Platform Built for DMPO Operations
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Every feature is designed to support the specific administrative workflows of discount medical plan organizations.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.name} className="relative group rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold leading-8 text-slate-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-600">
                    {feature.description}
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
