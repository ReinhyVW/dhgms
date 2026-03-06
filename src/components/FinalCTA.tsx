import { Button } from './ui/Button';

export function FinalCTA() {
  return (
    <section className="bg-blue-600 py-20 sm:py-28 relative overflow-hidden">
      {/* Abstract decorative elements */}
      <div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/shapes/svg?seed=dhg-abstract&backgroundColor=2563eb')] opacity-10 mix-blend-overlay"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Bring More Control to Your DMPO Operations
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Stop managing a growing organization through disconnected tools and manual processes. DHG Management Services helps you streamline administration, improve visibility, and build a stronger operational foundation.
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="secondary" size="lg" className="border-0 bg-white text-blue-600 hover:bg-slate-50 w-full sm:w-auto">
            Book a Demo
          </Button>
          <Button variant="ghost" size="lg" className="w-full sm:w-auto text-white hover:bg-white/10 hover:text-white border border-transparent">
            Schedule a Walkthrough
          </Button>
        </div>
      </div>
    </section>
  );
}
