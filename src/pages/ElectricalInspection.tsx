import ThreeStepPlan from '../components/ThreeStepPlan';
import ContactForm from '../components/ContactForm';
import { ShieldCheck, Activity, Search, ShieldAlert, ArrowDownCircle } from 'lucide-react';

export default function ElectricalInspection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#131924] pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#F97316]/5 mix-blend-screen pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-[#F97316] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-4 text-sm md:text-base before:content-[''] before:w-8 before:h-1 before:bg-[#F97316]">
              Residential Services
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Uncover Hidden Hazards Before They Cost You <span className="text-[#F97316]">Thousands.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed mb-10">
              Stop fire hazards from hiding behind walls. Our signature 60-point property diagnostic reveals faults, inefficiencies, and load levels that standard inspectors miss.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-4 bg-[#F97316] text-white font-black text-lg uppercase tracking-wider hover:bg-[#c2410a] transition-colors inline-block shadow-[6px_6px_0_0_#F8FAFC]">
                 Schedule Inspection
              </a>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-8 right-10 opacity-20 text-[#F97316]">
          <Activity className="w-64 h-64" />
        </div>
      </section>

      {/* Copy Blueprint / The Signature Checklist */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="bg-[#131924] text-white p-10 md:p-12 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 bg-[#F97316] text-white z-10">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-6 relative z-10">The Signature <br/> <span className="text-[#F97316]">60-Point Checklist</span></h3>
                  <p className="text-slate-300 font-medium leading-relaxed mb-8 relative z-10">
                    Our comprehensive property diagnostic leaves nothing to chance. We rigorously test for safety, efficiency, and compliance.
                  </p>
                  
                  <ul className="space-y-4 font-bold text-lg relative z-10">
                    <li className="flex items-center gap-3 border-b border-slate-700 pb-3">
                       <ArrowDownCircle className="text-[#F97316] w-5 h-5 shrink-0" />
                       Electrical Safety Testing
                    </li>
                    <li className="flex items-center gap-3 border-b border-slate-700 pb-3">
                       <ArrowDownCircle className="text-[#F97316] w-5 h-5 shrink-0" />
                       Systems Efficiency Diagnostics
                    </li>
                    <li className="flex items-center gap-3 border-b border-slate-700 pb-3">
                       <ArrowDownCircle className="text-[#F97316] w-5 h-5 shrink-0" />
                       Smoke & CO Detector Testing
                    </li>
                  </ul>
                  
                  <div className="absolute bottom-0 -right-10 w-48 h-48 border-[20px] border-[#F97316] opacity-10 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-16">
              
              {/* Use Case 1 */}
              <div>
                <h3 className="text-3xl font-black text-[#131924] uppercase mb-4 flex items-center gap-4">
                  <span className="bg-[#F97316] text-white w-12 h-12 flex items-center justify-center shrink-0">01</span>
                  New Purchase Inspections
                </h3>
                <div className="pl-16">
                  <h4 className="text-xl font-bold text-slate-800 mb-3 border-l-4 border-[#F97316] pl-4">Don't buy an electrical nightmare.</h4>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Hiding hazards behind walls can turn a dream home into a financial disaster. Spotting dangerous fire hazards, ungrounded outlets, or massive inefficiencies early saves thousands and lets buyers demand repairs <strong>before</strong> closing.
                  </p>
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="relative">
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-slate-200 -z-10"></div>
                <h3 className="text-3xl font-black text-[#131924] uppercase mb-4 flex items-center gap-4">
                  <span className="bg-[#131924] text-white w-12 h-12 flex items-center justify-center shrink-0">02</span>
                  Home Safety Inspections
                </h3>
                <div className="pl-16">
                  <h4 className="text-xl font-bold text-slate-800 mb-3 border-l-4 border-[#131924] pl-4">Protecting modern families.</h4>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Growing families and modern technology spike energy consumption demands. Overloading old utility systems causes hidden damage. This inspection tests baseline safety gear, ensuring your panel can handle the load safely while rigorously optimizing smoke and CO detectors.
                  </p>
                </div>
              </div>

              {/* Use Case 3 */}
              <div>
                <h3 className="text-3xl font-black text-[#131924] uppercase mb-4 flex items-center gap-4">
                  <span className="bg-slate-200 text-[#131924] border-2 border-[#131924] w-12 h-12 flex items-center justify-center shrink-0">03</span>
                  Real Estate Inspections
                </h3>
                <div className="pl-16">
                  <h4 className="text-xl font-bold text-slate-800 mb-3 border-l-4 border-slate-300 pl-4">Maximize your market value.</h4>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">
                    Selling a home? Pre-engineering repairs to satisfy aggressive real estate agent and buyer demands affordably makes you a stronger seller. Clear the inspection hurdles seamlessly before you list.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <ThreeStepPlan />
      <ContactForm />
    </>
  );
}
