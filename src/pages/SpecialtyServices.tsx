import ThreeStepPlan from '../components/ThreeStepPlan';
import ContactForm from '../components/ContactForm';
import { Camera, Shield, CheckCircle2, PlayCircle, ShieldAlert } from 'lucide-react';

export default function SpecialtyServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#131924] pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b-8 border-[#F97316]">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-[#F97316] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-4 text-sm md:text-base before:content-[''] before:w-8 before:h-1 before:bg-[#F97316]">
              Structural & Security Upgrades
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
              Protect And Monitor <span className="text-[#F97316] block mt-2">What Matters Most.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed mb-10 border-l-4 border-[#F97316] pl-6">
              Total home security goes beyond the front door lock. Ensure your system's critical safety valves and property surveillance are operating flawlessly.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-4 bg-[#F97316] text-[#131924] font-black text-lg uppercase tracking-wider hover:bg-white transition-colors inline-block shadow-[6px_6px_0_0_#F8FAFC]">
                 Schedule Safety Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Media Container */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#131924] border-4 border-[#F97316] p-4 md:p-8 relative shadow-2xl overflow-hidden group mb-24">
             <div className="aspect-w-16 aspect-h-9 relative z-10 w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
               <iframe 
                 className="absolute top-0 left-0 w-full h-full border-0"
                 src="https://www.youtube.com/embed/tVM0D_xj0Ls?si=MrCX-KtVdRseD7-3" 
                 title="YouTube video player" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 referrerPolicy="strict-origin-when-cross-origin" 
                 allowFullScreen>
               </iframe>
             </div>
             
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#F97316]/5 -rotate-45 pointer-events-none"></div>
             <PlayCircle className="absolute -bottom-10 -right-10 w-32 h-32 text-slate-800 opacity-20 pointer-events-none" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Panel Grounding */}
            <div className="bg-slate-50 border-4 border-[#131924] p-10 relative group shadow-[8px_8px_0_0_#131924]">
              <div className="absolute top-0 left-0 p-4 bg-[#131924] text-white">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-black uppercase text-[#131924] mb-4 leading-tight">Main Panel Grounding</h3>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  Grounding offers excess electricity the most effective and safest route from an appliance back to the ground by way of an electrical panel. Electrical grounding is a backup pathway that is generally only used if there is a fault in the wiring system.
                </p>
              </div>
            </div>

            {/* Smoke Alarms */}
            <div className="bg-slate-50 border-4 border-[#131924] p-10 relative group shadow-[8px_8px_0_0_#131924]">
              <div className="absolute top-0 right-0 p-4 bg-[#131924] text-white">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-black uppercase text-[#131924] mb-4 leading-tight">Smoke Alarms</h3>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  Smoke alarms save lives. Properly installed and maintained smoke alarms play a vital role in reducing fire deaths and injuries. If there is a fire in your home, smoke spreads fast and you need smoke alarms to give you time to get out.
                </p>
              </div>
            </div>

            {/* Security Systems */}
            <div className="bg-[#F8FAFC] border-4 border-[#F97316] p-10 relative group shadow-[8px_8px_0_0_#F97316]">
              <div className="absolute top-0 right-0 p-4 bg-[#F97316] text-[#131924]">
                <Camera className="w-8 h-8" />
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-black uppercase text-[#131924] mb-4 leading-tight">Security Camera Installs</h3>
                <p className="text-base text-slate-600 font-medium leading-relaxed mb-6">
                  Comes with everything you need except a monitor. Just use any HDTV or Computer monitor. Fantastic Package Price!
                </p>
                <ul className="space-y-2 text-sm font-bold text-slate-800 border-l-2 border-[#131924] pl-4">
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" /> (1) NSN-608(4K)-8P</li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" /> (4) NSC-204G-BT</li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" /> (4) NSC-214G-DM</li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" /> 4MP High Definition Video</li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" /> Base Price includes a 500 GB Hard Drive</li>
                </ul>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase text-[#131924] tracking-tighter mb-4">Real Client <span className="text-[#F97316]">Stories</span></h2>
            <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              Our customers consistently rate us 5 stars on Google. Here's what they have to say about our fast, dependable, and professional service across the Wasatch Front.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border-2 border-slate-200 p-8 hover:border-[#F97316] transition-colors relative">
               <div className="text-[#F97316] text-4xl font-serif absolute -top-4 left-6 bg-white px-2">"</div>
               <p className="text-slate-600 font-medium italic mt-2 mb-6">"Wonderful and trustworthy company. They had our issue fixed quickly, great communication. I will 100% recommend to anyone needing an electrician. Thank you Greg!"</p>
               <div className="font-black uppercase text-sm text-[#131924]">— Christine Walke</div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-[#131924] text-white border-2 border-[#131924] p-8 hover:border-[#F97316] transition-colors relative shadow-[8px_8px_0_0_#F97316]">
               <div className="text-[#F97316] text-4xl font-serif absolute -top-4 left-6 bg-[#131924] px-2">"</div>
               <p className="text-slate-300 font-medium italic mt-2 mb-6">"Helped me big time on a meter base replacement emergency! Work was done fast with great communication and professionalism at a fair price! I am extremely satisfied..."</p>
               <div className="font-black uppercase text-sm text-[#F97316]">— Russ Cottam</div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white border-2 border-slate-200 p-8 hover:border-[#F97316] transition-colors relative">
               <div className="text-[#F97316] text-4xl font-serif absolute -top-4 left-6 bg-white px-2">"</div>
               <p className="text-slate-600 font-medium italic mt-2 mb-6">"Greg and Raddon helped install some stuff for a generator on my house. They were incredible to work with. And so knowledgeable, and got it done quick."</p>
               <div className="font-black uppercase text-sm text-[#131924]">— Tyler Gines</div>
            </div>
            {/* Testimonial 4 */}
            <div className="bg-[#131924] text-white border-2 border-[#131924] p-8 hover:border-[#F97316] transition-colors relative shadow-[8px_8px_0_0_#F97316]">
               <div className="text-[#F97316] text-4xl font-serif absolute -top-4 left-6 bg-[#131924] px-2">"</div>
               <p className="text-slate-300 font-medium italic mt-2 mb-6">"We had many things done by this company from fuse box work, interior wiring issues... to smoke detector installation. It was all done with exceptional professionalism."</p>
               <div className="font-black uppercase text-sm text-[#F97316]">— Debra Taylor</div>
            </div>
            {/* Testimonial 5 */}
            <div className="bg-white border-2 border-slate-200 p-8 hover:border-[#F97316] transition-colors relative">
               <div className="text-[#F97316] text-4xl font-serif absolute -top-4 left-6 bg-white px-2">"</div>
               <p className="text-slate-600 font-medium italic mt-2 mb-6">"Electri-City Utah did a great job for us. They came out to our facility... and handled everything quickly and professionally. The turnaround was fast, the quality was great."</p>
               <div className="font-black uppercase text-sm text-[#131924]">— Alex Shields</div>
            </div>
            {/* Testimonial 6 */}
            <div className="bg-white border-2 border-slate-200 p-8 hover:border-[#F97316] transition-colors relative">
               <div className="text-[#F97316] text-4xl font-serif absolute -top-4 left-6 bg-white px-2">"</div>
               <p className="text-slate-600 font-medium italic mt-2 mb-6">"Electri-City Utah has been great to work with. They're reliable, efficient, and keep things moving without cutting corners—something that makes a huge difference."</p>
               <div className="font-black uppercase text-sm text-[#131924]">— Marinda Lloyd</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Range */}
      <section className="py-24 bg-[#131924] text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 border-l-4 border-[#F97316] pl-6">
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Complete Electrical <span className="text-[#F97316]">Solutions</span></h2>
              <p className="text-xl text-slate-300 font-light">From medical installations to basic residential troubleshooting, our company offers the following services:</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
               {[
                 'Maintenance and repair of existing systems',
                 'Electrical installations',
                 'Voice/Data processing cables',
                 'Installation of kitchen fixtures, fittings',
                 'Outside lighting and landscape',
                 'Modernization in old structures',
                 'Retail in-fill/build outs',
                 'Medical Installations',
                 'Generators',
                 'Strip Centers',
                 'New Construction',
                 'Service Upgrades',
                 'Solar',
                 'Electric Charger stations',
                 'Lighting Retrofit'
               ].map((service, idx) => (
                 <div key={idx} className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <CheckCircle2 className="w-5 h-5 text-[#F97316] shrink-0" />
                    <span className="font-bold text-slate-200">{service}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <ThreeStepPlan />
      <ContactForm />
    </>
  );
}
