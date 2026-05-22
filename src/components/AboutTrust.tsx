import { Target, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function AboutTrust() {
  return (
    <section id="about" className="py-24 bg-[#131924] relative overflow-hidden">
      {/* Abstract overlapping shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900 skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-20">
          <h2 className="text-[#EA580C] font-black uppercase tracking-[0.2em] text-sm mb-4 flex items-center gap-4 before:content-[''] before:w-12 before:h-0.5 before:bg-[#EA580C]">
            Company Profile
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-3xl">
            A Higher Standard of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">Service & Integrity</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-5 relative">
            <div className="bg-[#EA580C] p-8 md:p-12 shadow-2xl relative z-20 translate-y-8 lg:translate-x-8">
              <Target className="w-12 h-12 text-white mb-6" />
              <h4 className="text-2xl font-black text-white uppercase tracking-wider mb-6">Our Mission</h4>
              <p className="text-white/90 text-lg leading-relaxed font-medium">
                "Our mission is to provide quality electrical service and installation at a fair and balanced price. Electri-City Utah LLC has been in business since 1997. We enjoy the start-to-finish rewards of pleasing our clients, call us for all of your construction and electrical needs."
              </p>
            </div>
            {/* Outline Box Offset */}
            <div className="absolute inset-0 border-4 border-slate-700 -z-10 translate-x-4 -translate-y-4"></div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center mt-12 lg:mt-0">
            <h4 className="text-2xl font-bold text-white mb-10 pb-4 border-b border-slate-800">Trust Pillars</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              <div className="group border-l-4 border-slate-800 pl-6 hover:border-[#EA580C] transition-colors duration-300">
                <ShieldCheck className="w-8 h-8 text-[#EA580C] mb-4" />
                <h5 className="text-xl font-bold text-white mb-2">Licensed & Bonded</h5>
                <p className="text-slate-400 font-medium">State of Utah Licensed Master Electrician. Fully bonded and insured for absolute property protection.</p>
              </div>

              <div className="group border-l-4 border-slate-800 pl-6 hover:border-[#EA580C] transition-colors duration-300">
                <AlertTriangle className="w-8 h-8 text-[#EA580C] mb-4" />
                <h5 className="text-xl font-bold text-white mb-2">Upfront Pricing</h5>
                <p className="text-slate-400 font-medium">Pricing is locked in during the initial property assessment. No hidden fees or surprise hourly overruns.</p>
              </div>

              <div className="group border-l-4 border-slate-800 pl-6 hover:border-[#EA580C] transition-colors duration-300">
                <CheckCircle2 className="w-8 h-8 text-[#EA580C] mb-4" />
                <h5 className="text-xl font-bold text-white mb-2">Strict Background Checks</h5>
                <p className="text-slate-400 font-medium">Your home's security is paramount. All employees pass strict background checks and ongoing drug screenings.</p>
              </div>

              <div className="group border-l-4 border-slate-800 pl-6 hover:border-[#EA580C] transition-colors duration-300">
                <div className="text-[#EA580C] font-black text-4xl mb-3 tracking-tighter">1997</div>
                <h5 className="text-xl font-bold text-white mb-2">Established History</h5>
                <p className="text-slate-400 font-medium">Decades of dedicated operation servicing Wasatch Front communities and businesses.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
