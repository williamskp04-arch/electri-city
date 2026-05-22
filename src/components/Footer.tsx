import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#131924] text-slate-300 py-16 border-t-[10px] border-[#F97316] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 border-b border-slate-800 pb-12">
          
          <div className="flex items-center gap-3">
            <div className="bg-[#F97316] p-2 rotate-3 shadow-[4px_4px_0_0_rgba(255,255,255,0.1)]">
              <Zap className="w-6 h-6 text-white -rotate-3" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase leading-none text-white">
                Electri-City
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#F97316] uppercase ml-1">
                Utah LLC
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-[#F97316] transition-colors">Home</Link>
            <Link to="/electrical-inspection" className="text-sm font-bold uppercase tracking-widest hover:text-[#F97316] transition-colors">Inspections</Link>
            <Link to="/surge-protection" className="text-sm font-bold uppercase tracking-widest hover:text-[#F97316] transition-colors">Surge Protection</Link>
            <Link to="/specialty-services" className="text-sm font-bold uppercase tracking-widest hover:text-[#F97316] transition-colors">Specialty</Link>
            <Link to="/gallery" className="text-sm font-bold uppercase tracking-widest hover:text-[#F97316] transition-colors">Gallery</Link>
            <Link to="/#about" className="text-sm font-bold uppercase tracking-widest hover:text-[#F97316] transition-colors" onClick={() => { setTimeout(() => document.getElementById('about')?.scrollIntoView(), 100) }}>About</Link>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-bold text-slate-500 uppercase tracking-widest gap-4 text-center md:text-left">
          <p>&copy; {currentYear} Electri-City Utah LLC. All rights reserved.</p>
          <p>Licensed Master Electrician | Bonded | Insured</p>
        </div>
        
      </div>
    </footer>
  );
}
