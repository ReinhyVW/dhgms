import { Users, FileText, CreditCard, PieChart, Clock, Search, Briefcase, Activity } from 'lucide-react';

export function DashboardVisual() {
  const mockCards = [
    { label: 'Active Members', icon: Users, value: '12,450', change: '+12%' },
    { label: 'Pending Enrollments', icon: FileText, value: '342', change: '+5%' },
    { label: 'Payment Status', icon: CreditCard, value: '98.5%', change: 'Healthy' },
    { label: 'Renewals Due', icon: Clock, value: '850', change: 'Next 30 days' },
  ];

  const features = [
    'Online plan enrollment',
    'Member status lookup',
    'Recurring billing workflows',
    'Plan and pricing administration',
    'Agency and staff support tools',
    'Operational dashboards and reporting',
  ];

  return (
    <section className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Mock UI Container */}
        <div className="relative rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/50 shadow-2xl backdrop-blur-3xl sm:p-8 overflow-hidden">
          
          <div className="mb-8 text-center sm:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">A Clearer View of Your Operation</h2>
            <p className="mt-2 text-slate-600">From active memberships to payment trends and operational activity, stay informed without digging through multiple systems.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {mockCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-600">{card.label}</span>
                  </div>
                  <div className="mt-auto">
                    <span className="text-2xl font-bold text-slate-900">{card.value}</span>
                    <span className="ml-2 text-xs font-medium text-emerald-600">{card.change}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6 border-t border-slate-200/60">
            <div className="flex flex-col items-center justify-center p-3 text-center bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
              <Users className="h-4 w-4 text-slate-400 mb-2" />
              <span className="text-xs font-semibold text-slate-700">Members</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
              <Search className="h-4 w-4 text-slate-400 mb-2" />
              <span className="text-xs font-semibold text-slate-700">Lookup</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
              <CreditCard className="h-4 w-4 text-slate-400 mb-2" />
              <span className="text-xs font-semibold text-slate-700">Billing</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
              <PieChart className="h-4 w-4 text-slate-400 mb-2" />
              <span className="text-xs font-semibold text-slate-700">Plans</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
              <Briefcase className="h-4 w-4 text-slate-400 mb-2" />
              <span className="text-xs font-semibold text-slate-700">Agencies</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
              <Activity className="h-4 w-4 text-slate-400 mb-2" />
              <span className="text-xs font-semibold text-slate-700">Reports</span>
            </div>
          </div>
        </div>

        {/* Supporting Points */}
        <div className="mt-16 text-center">
          <p className="text-base font-semibold leading-7 text-blue-600">Everything your team needs to operate efficiently:</p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm leading-6 text-slate-600">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <svg className="h-5 w-5 flex-none text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}
