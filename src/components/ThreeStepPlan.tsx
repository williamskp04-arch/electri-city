import { PhoneCall, CalendarCheck, ShieldCheck } from 'lucide-react';

export default function ThreeStepPlan() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#131924] uppercase tracking-tight mb-4">
            Three Simple Steps to
            <span className="block text-[#F97316] mt-2">Electrical Peace of Mind</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Don't live with the anxiety of hidden electrical hazards. Getting your home secured is quick and easy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[50px] left-[15%] w-[70%] h-1 bg-slate-200 -z-10"></div>
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-4 border-[#131924] rounded-full flex items-center justify-center mb-6 relative shadow-[8px_8px_0_0_#F97316] group-hover:translate-y-1 group-hover:shadow-[4px_4px_0_0_#F97316] transition-all">
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-[#131924] text-white font-black rounded-full border-2 border-white flex items-center justify-center">1</span>
              <PhoneCall className="w-10 h-10 text-[#131924]" />
            </div>
            <h3 className="text-2xl font-black uppercase text-[#131924] mb-3">Call or Text Us</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Reach out via phone or text. We prioritize all inbound quotes and strictly answer 24/7 for emergencies.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-[#131924] text-white border-4 border-[#131924] rounded-full flex items-center justify-center mb-6 relative shadow-[8px_8px_0_0_#F97316] group-hover:translate-y-1 group-hover:shadow-[4px_4px_0_0_#F97316] transition-all">
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-white text-[#131924] font-black rounded-full border-2 border-[#131924] flex items-center justify-center">2</span>
              <CalendarCheck className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black uppercase text-[#131924] mb-3">Custom Assessment</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Our Master Electrician will evaluate your property and provide upfront, locked-in pricing before any work begins.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-[#F97316] text-white border-4 border-[#131924] rounded-full flex items-center justify-center mb-6 relative shadow-[8px_8px_0_0_#131924] group-hover:translate-y-1 group-hover:shadow-[4px_4px_0_0_#131924] transition-all">
              <span className="absolute -top-3 -left-3 w-8 h-8 bg-[#131924] text-white font-black rounded-full border-2 border-white flex items-center justify-center">3</span>
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black uppercase text-[#131924] mb-3">Enjoy a Safe Home</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Rest easy knowing your family, appliances, and property value are protected by fully bonded, guaranteed work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
