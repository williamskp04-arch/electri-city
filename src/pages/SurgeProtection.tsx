import ThreeStepPlan from '../components/ThreeStepPlan';
import ContactForm from '../components/ContactForm';
import { Shield, ZapOff, ArrowRight } from 'lucide-react';

export default function SurgeProtection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#131924] pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none"></div>
        {/* Abstract lightning strike design */}
        <div className="absolute top-0 right-1/4 w-2 h-64 bg-[#F97316] rotate-[25deg] shadow-[0_0_50px_10px_#F97316]"></div>
        <div className="absolute top-48 right-1/4 w-2 h-48 bg-[#F97316] -rotate-[15deg] shadow-[0_0_50px_10px_#F97316] translate-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-[#F97316] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-4 text-sm md:text-base before:content-[''] before:w-8 before:h-1 before:bg-[#F97316]">
              Residential Services
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
              One Power Surge Can Ruin Your Appliances. <span className="text-[#F97316] block mt-2">Protect Your Whole Home From the Source.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed mb-10 border-l-4 border-[#F97316] pl-6">
              Lightning strikes and grid faults don't care about cheap power strips. Integrate heavy-duty surge equipment into your main panel to lock down your home.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-4 bg-white text-[#131924] font-black text-lg uppercase tracking-wider hover:bg-slate-200 transition-colors inline-block shadow-[6px_6px_0_0_#F97316]">
                 Get a Surge Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            
            {/* The Problem (Power Strips vs The Real Threat) */}
            <div className="bg-slate-50 border-4 border-slate-200 p-10 md:p-16 relative">
              <div className="absolute -top-6 -left-6 bg-slate-800 text-white p-4">
                <ZapOff className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase text-slate-800 mb-6">The Plastic <span className="text-slate-400">Illusion</span></h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Standard, cheap power strips offer minimal, localized protection. They cannot defend against aggressive lightning or massive local grid faults that strike phone lines, internet cables, and main panels.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Even internal faults—like a heavy vacuum motor starting—can violently spike an un-optimized electrical system, slowly frying microwaves, TVs, and expensive refrigerators over time.
              </p>
            </div>

            {/* The Solution (Whole-House Integration) */}
            <div className="bg-[#131924] text-white border-4 border-[#131924] p-10 md:p-16 relative shadow-[12px_12px_0_0_#F97316]">
              <div className="absolute -top-6 -right-6 bg-[#F97316] text-white p-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase text-white mb-6">The Whole-Home <span className="text-[#F97316]">Solution</span></h3>
              <p className="text-lg text-slate-300 font-medium leading-relaxed border-l-2 border-[#F97316] pl-6 mb-6">
                Surge protection equipment must be integrated straight into the main electrical panel box.
              </p>
              <p className="text-lg text-slate-300 font-medium leading-relaxed">
                This central interception strategy stops man-made or natural spikes <strong>before</strong> they ever cross into the home's delicate internal wiring. Trying to scale localized portable protectors to every outlet is incredibly expensive and functionally inferior.
              </p>
              <a href="#contact" className="mt-8 font-black uppercase tracking-widest text-[#F97316] hover:text-white transition-colors flex items-center gap-2">
                Request Panel Integration <ArrowRight className="w-5 h-5" />
              </a>
            </div>

          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-black text-[#131924] uppercase mb-6">A Critical Maintenance Note</h3>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Panel boxes age and require continuous upgrades to support home safety. When our licensed Master Electricians install your whole-home surge protector, they also evaluate your panel's grounding integrity to ensure absolute compliance and safety.
            </p>
          </div>

        </div>
      </section>

      <ThreeStepPlan />
      <ContactForm />
    </>
  );
}
