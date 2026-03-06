import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold tracking-tighter text-xs">DHG</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Management Services
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-400">
            <Link href="#" className="hover:text-white transition-colors">Platform</Link>
            <Link href="#" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="#" className="hover:text-white transition-colors">Why DHG</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </nav>

        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} DHG Management Services. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built for modern Discount Medical Plan Organizations.
          </p>
        </div>
      </div>
    </footer>
  );
}
