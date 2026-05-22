import { Shield, Camera } from 'lucide-react';

export default function SecondaryServices() {
  return (
    <section className="py-24 bg-white border-b-8 border-[#131924]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
          
          {/* Card 1 */}
          <div className="relative p-10 md:p-16 border-4 border-[#131924] lg:border-r-0 hover:bg-slate-50 transition-colors group">
            <div className="absolute top-0 right-0 p-4 bg-[#131924] text-white">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-[#131924] uppercase tracking-wide mb-6">
              Main Panel <br/> <span className="text-slate-400">Grounding</span>
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Safely routes excess electricity back to the earth. Functions as a vital backup pathway for wiring system faults, protecting both occupants and devices.
            </p>
            <div className="mt-8 h-1 w-16 bg-[#EA580C] group-hover:w-32 transition-all duration-500"></div>
          </div>

          {/* Card 2 */}
          <div className="relative p-10 md:p-16 bg-[#131924] text-white overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[#EA580C] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute top-0 right-0 p-4 bg-[#EA580C] text-white">
              <Camera className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-wide mb-6 relative z-10">
              Security Camera <br/> <span className="text-slate-400">Installs</span>
            </h3>
            <ul className="space-y-4 text-lg text-slate-300 font-medium relative z-10 border-l-2 border-[#EA580C] pl-6 py-2">
              <li>High-definition 4MP surveillance systems hooked to a local NVR.</li>
              <li>Base package includes a 500 GB Hard Drive.</li>
              <li>Plugs cleanly into any HDTV or computer monitor (no complex external cloud required).</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
