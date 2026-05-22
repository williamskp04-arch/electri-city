import { AlertOctagon, PhoneCall } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#131924] min-h-[90vh] flex items-center pt-10 pb-20 lg:py-0 overflow-hidden">
      {/* Background Textures & Abstract Shapes */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      
      {/* Asymmetric color block */}
      <div className="absolute right-0 bottom-0 w-full lg:w-1/2 h-48 lg:h-full bg-[#EA580C]/10 skew-y-6 origin-bottom-right transform"></div>
      <div className="absolute left-0 top-1/4 w-32 h-64 bg-slate-800/50 -rotate-12 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Aggressive Emergency Banner */}
            <div className="relative group mb-8 md:mb-12">
              <div className="absolute -inset-1 bg-[#EA580C] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative flex items-center gap-3 bg-[#131924] border-l-4 border-r-4 border-[#EA580C] px-5 py-3 md:px-8 md:py-4 shadow-2xl">
                <AlertOctagon className="w-6 h-6 md:w-8 md:h-8 text-[#EA580C] animate-pulse" />
                <h2 className="text-[#F8FAFC] font-black uppercase tracking-widest text-xs md:text-sm lg:text-base">
                  24/7 Emergency Service Dispatch
                </h2>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight mb-8">
              Your Electrical <br className="hidden md:block" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] to-amber-400">
                Home Inspection
                <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-1 md:h-2 bg-[#EA580C] skew-x-12 opacity-80"></span>
              </span>
              <br />& Safety Professionals
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light border-l-2 border-slate-700 pl-6 mb-12 max-w-3xl leading-relaxed">
              Serving the Wasatch Front with unmatched expertise. We locate and eliminate hazards before they become emergencies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a href="#residential-services" className="px-8 py-5 bg-[#F8FAFC] text-[#131924] font-black text-lg uppercase tracking-wider hover:bg-slate-200 transition-colors flex items-center justify-center shadow-[8px_8px_0_0_#EA580C]">
                Explore Services
              </a>
              <a href="#contact" className="px-8 py-5 border-2 border-slate-700 text-white font-bold text-lg uppercase tracking-wider hover:border-[#EA580C] hover:bg-[#EA580C]/10 transition-colors flex items-center justify-center">
                Book Inspection
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
