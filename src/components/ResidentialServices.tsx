import { Zap, Activity, Shield, ArrowRight } from 'lucide-react';

interface Props {
  activeTab: 'inspections' | 'surge';
  setActiveTab: (tab: 'inspections' | 'surge') => void;
}

export default function ResidentialServices({ activeTab, setActiveTab }: Props) {
  return (
    <section id="residential-services" className="py-24 bg-[#F8FAFC] relative">
      
      {/* Decorative large text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none opacity-[0.03]">
        <h2 className="text-[15vw] font-black whitespace-nowrap text-slate-900">RESIDENTIAL</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Custom Tab Controls */}
        <div className="flex flex-col md:flex-row gap-0 mb-16 shadow-[8px_8px_0_0_rgba(19,25,36,0.1)]">
          <button 
            onClick={() => setActiveTab('inspections')}
            className={`flex-1 flex items-center justify-center gap-3 py-6 px-4 text-lg md:text-xl font-black uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'inspections' 
              ? 'bg-[#131924] text-white border-t-4 border-[#EA580C]' 
              : 'bg-white text-slate-500 hover:bg-slate-50 border-t-4 border-transparent'
            }`}
          >
            <Activity className="w-6 h-6" /> Electrical Inspection
          </button>
          <button 
            onClick={() => setActiveTab('surge')}
            className={`flex-1 flex items-center justify-center gap-3 py-6 px-4 text-lg md:text-xl font-black uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'surge' 
              ? 'bg-[#131924] text-white border-t-4 border-[#EA580C]' 
              : 'bg-white text-slate-500 hover:bg-slate-50 border-t-4 border-transparent'
            }`}
          >
            <Shield className="w-6 h-6" /> Surge Protection
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="bg-white border-4 border-[#131924] p-8 md:p-12 lg:p-16 relative">
          
          {/* Accent corner block */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#EA580C] hidden md:block"></div>
          
          {activeTab === 'inspections' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-4xl font-black text-[#131924] uppercase leading-none mb-6">
                    Meticulous Property <br/><span className="text-[#EA580C]">Diagnostics.</span>
                  </h3>
                  <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed border-l-4 border-slate-200 pl-6">
                    Inspections are vital to understand system capabilities, map improvements, and flag hazards. Electri-City has been executing these for over two decades.
                  </p>
                  
                  <div className="bg-[#131924] p-8 mb-8 text-white relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EA580C] to-amber-400"></div>
                    <h4 className="text-xl font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
                      <Zap className="text-[#EA580C] w-6 h-6" /> The Signature Checklist
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      Explicitly featuring the <strong>"Electri-City Utah LLC 60-point checklist"</strong> — a comprehensive property diagnostic revealing faults, inefficiencies, and load levels.
                    </p>
                  </div>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm font-bold text-slate-700">
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#EA580C] shrink-0"/> Electrical Safety Testing</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#EA580C] shrink-0"/> Systems Efficiency</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#EA580C] shrink-0"/> Real Estate Inspections</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#EA580C] shrink-0"/> Surge Protection Detail</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#EA580C] shrink-0"/> Smoke/CO Detector Checks</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#EA580C] shrink-0"/> Connector Integrity Testing</li>
                  </ul>
                </div>
                
                <div className="flex flex-col gap-8">
                  <div className="group hover:-translate-y-1 transition-transform">
                    <h4 className="text-2xl font-bold text-[#131924] mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#F8FAFC] border-2 border-[#131924] flex items-center justify-center text-sm">01</span>
                      New Purchase Inspections
                    </h4>
                    <p className="text-slate-600 pl-11">
                      Hiding hazards behind walls can turn a dream home into an electrical nightmare. Spotting fire hazards or inefficiencies early saves thousands and lets buyers demand repairs before closing.
                    </p>
                  </div>
                  
                  <div className="group hover:-translate-y-1 transition-transform">
                    <h4 className="text-2xl font-bold text-[#131924] mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#F8FAFC] border-2 border-[#131924] flex items-center justify-center text-sm">02</span>
                      Home Safety Inspections
                    </h4>
                    <p className="text-slate-600 pl-11">
                      Growing families and modern technology spike energy consumption demands. Overloading old systems causes hidden damage. This inspection tests baseline safety gear, including smoke and carbon monoxide (CO) detectors.
                    </p>
                  </div>
                  
                  <div className="group hover:-translate-y-1 transition-transform">
                    <h4 className="text-2xl font-bold text-[#131924] mb-3 flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#F8FAFC] border-2 border-[#131924] flex items-center justify-center text-sm">03</span>
                      Real Estate Inspections
                    </h4>
                    <p className="text-slate-600 pl-11">
                      Maximizes market value before putting a home on the market. Repairs are pre-engineered to satisfy real estate agent and buyer demands affordably.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'surge' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-4xl font-black text-[#131924] uppercase leading-none mb-6">
                    Defend the <br/><span className="text-[#EA580C]">Grid.</span>
                  </h3>
                  <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed border-l-4 border-slate-200 pl-6">
                    Lightning or local grid faults strike phone cables, TVs, appliances, and networking wires. Something as basic as a heavy vacuum motor starting can spike an un-optimized electrical system.
                  </p>

                  <div className="bg-[#EA580C] p-8 mb-8 text-white relative shadow-xl transform -rotate-1">
                    <h4 className="text-2xl font-black uppercase tracking-widest mb-4">
                      The Hazard
                    </h4>
                    <p className="text-white/90 text-lg leading-relaxed font-bold">
                      Ruined appliances, fried electronics, and electrical fires. Standard power strips offer minimal, localized protection.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 border-2 border-slate-200 p-8 md:p-10 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-[#131924] mb-6 pb-4 border-b border-slate-200">
                    The Whole-House Solution
                  </h4>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    Surge protection equipment must be integrated straight into the main electrical panel box to intercept man-made or natural spikes before they ever cross into the home's internal wiring.
                  </p>
                  
                  <div className="bg-[#131924] p-6 border-l-4 border-[#EA580C]">
                    <h5 className="text-[#EA580C] font-bold uppercase tracking-widest text-sm mb-2">Maintenance Note</h5>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Panel boxes age and require continuous upgrades to support home safety. Localized portable protectors are incredibly expensive to scale to every outlet; a whole-home panel integration handles it all at the source.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
