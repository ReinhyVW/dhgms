import { Button } from './ui/Button';
import { ShieldCheck, Users, Activity } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-100 via-white to-white"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mx-auto max-w-4xl tracking-tight text-slate-900 text-5xl font-extrabold sm:text-6xl md:text-7xl">
          DMPO Management Software Built for <span className="text-blue-600">Operational Clarity</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          Replace disconnected systems with software designed for the realities of DMPO operations. A centralized platform for enrollments, member management, recurring billing, and operational oversight.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Book a Demo
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            Explore Features
          </Button>
        </div>

        {/* Trust string */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-blue-600" />
            Purpose-built for DMPOs
          </div>
          <div className="hidden sm:block text-slate-300">•</div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            Branded enrollment flows
          </div>
          <div className="hidden sm:block text-slate-300">•</div>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-600" />
            Centralized member management
          </div>
        </div>
      </div>
    </section>
  );
}
