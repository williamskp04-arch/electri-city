import { Link } from 'react-router-dom';
import ThreeStepPlan from '../components/ThreeStepPlan';
import ContactForm from '../components/ContactForm';
import { Target, CheckCircle2, AlertTriangle, ShieldCheck, Zap, ArrowRight, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="relative bg-[#131924] min-h-[90vh] flex items-center pt-10 pb-20 lg:py-0 overflow-hidden">
        {/* Background Textures & Abstract Shapes */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-[0.15] mix-blend-luminosity"></div>
        
        {/* Asymmetric color block */}
        <div className="absolute right-0 bottom-0 w-full lg:w-1/2 h-48 lg:h-full bg-[#F97316]/10 skew-y-6 origin-bottom-right transform"></div>
        <div className="absolute left-0 top-1/4 w-32 h-64 bg-[#F97316]/10 -rotate-12 blur-[100px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
            
            <div className="lg:col-span-12 flex flex-col items-start translate-y-4">
              <h2 className="text-[#F97316] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-4 text-sm md:text-base before:content-[''] before:w-12 before:h-1 before:bg-[#F97316]">
                Since 1997
              </h2>
              {/* Headline (The Problem & StoryBrand Hero) */}
              <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white leading-[1.05] tracking-tight mb-8">
                Is Your Home's Wiring <br className="hidden md:block" />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-amber-400 pb-2">
                  Keeping Your Family Safe?
                  <span className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-[#F97316] skew-x-12 opacity-80"></span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 font-light border-l-4 border-slate-700 pl-6 mb-12 max-w-3xl leading-relaxed">
                <strong className="font-bold text-white">Don't let hidden electrical hazards put your property at risk.</strong> Electri-City Utah has helped Wasatch Front families protect their homes with upfront pricing and expert Master Electrician care.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                <a href="#contact" className="px-8 py-5 bg-[#F97316] text-white font-black text-lg uppercase tracking-wider hover:bg-[#c2410a] transition-colors flex items-center justify-center shadow-[8px_8px_0_0_#F8FAFC]">
                   Schedule An Inspection
                </a>
                <a href="tel:8015125798" className="px-8 py-5 border-2 border-slate-600 bg-slate-900/50 backdrop-blur-sm text-white font-bold text-lg uppercase tracking-wider hover:border-[#F97316] hover:bg-[#F97316]/10 transition-colors flex items-center justify-center">
                   Call / Text 801.512.5798
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Stakes (Failure vs Success) */}
      <section className="py-24 bg-white border-b-[8px] border-[#131924] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 border-4 border-[#131924] shadow-[12px_12px_0_0_#F97316]">
            
            {/* The Failure / Risk block */}
            <div className="bg-slate-50 p-10 md:p-16 lg:border-r-4 border-[#131924] group">
              <div className="mb-8 p-4 bg-slate-200 inline-block rotate-3 border-2 border-[#131924]">
                <AlertTriangle className="w-10 h-10 text-slate-700" />
              </div>
              <h3 className="text-4xl font-black text-[#131924] uppercase tracking-tighter mb-6 relative">
                The <span className="relative z-10 text-slate-800">Risk</span>
                <span className="absolute bottom-2 left-0 w-24 h-4 bg-slate-300 -z-10 skew-x-12"></span>
              </h3>
              <ul className="space-y-4 text-lg text-slate-600 font-medium">
                <li className="flex gap-3"><span className="text-red-500 font-black">×</span> Hidden fire hazards inside walls</li>
                <li className="flex gap-3"><span className="text-red-500 font-black">×</span> Surges destroying $1,000s in electronics</li>
                <li className="flex gap-3"><span className="text-red-500 font-black">×</span> Failed real estate buyer inspections</li>
              </ul>
            </div>

            {/* The Success / Reward block */}
            <div className="bg-[#131924] p-10 md:p-16 text-white group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-full h-full bg-[#F97316]/10 transform translate-x-1/2 -skew-x-12 group-hover:translate-x-0 transition-transform duration-700"></div>
              <div className="mb-8 p-4 bg-[#F97316] inline-block -rotate-3 border-2 border-white relative z-10">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-6 relative z-10">
                The <span className="relative z-10">Reward</span>
                <span className="absolute bottom-2 left-0 w-32 h-4 bg-[#F97316] -z-10 skew-x-12"></span>
              </h3>
              <ul className="space-y-4 text-lg text-slate-300 font-medium relative z-10">
                <li className="flex gap-3"><span className="text-[#F97316] font-black">✓</span> 25+ years of trusted, local safety</li>
                <li className="flex gap-3"><span className="text-[#F97316] font-black">✓</span> Locked-in, upfront pricing</li>
                <li className="flex gap-3"><span className="text-[#F97316] font-black">✓</span> Total peace of mind for your family</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Residential Dropdown Link Teasers */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-[#131924] uppercase tracking-tighter mb-4">Dedicated Safety Services</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Inspection Teaser Block */}
              <div className="relative pt-8">
                <div className="absolute top-0 left-8 bg-[#131924] text-white font-black px-6 py-2 uppercase tracking-widest border-2 border-[#131924] z-10 text-sm">
                  Service 01
                </div>
                <div className="bg-white border-4 border-[#131924] p-8 pt-12 hover:-translate-y-2 transition-transform duration-300 relative group h-full flex flex-col justify-between shadow-[6px_6px_0_0_#F97316]">
                  <div>
                    <h3 className="text-2xl font-black text-[#131924] uppercase leading-tight mb-4">Electrical Home <br/><span className="text-[#F97316]">Inspections</span></h3>
                    <p className="text-base text-slate-600 font-medium mb-8">Uncover hidden hazards before they cost you thousands. We utilize our signature 60-point checklist.</p>
                  </div>
                  <Link to="/electrical-inspection" className="inline-flex items-center gap-2 text-base font-black uppercase tracking-wider text-[#131924] group-hover:text-[#F97316] transition-colors border-b-2 border-[#131924] group-hover:border-[#F97316] self-start pb-1">
                    See Details <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Surge Teaser Block */}
              <div className="relative pt-8">
                <div className="absolute top-0 left-8 bg-[#F97316] text-white font-black px-6 py-2 uppercase tracking-widest border-2 border-[#F97316] z-10 text-sm">
                  Service 02
                </div>
                <div className="bg-[#131924] text-white border-4 border-[#131924] p-8 pt-12 hover:-translate-y-2 transition-transform duration-300 relative group h-full flex flex-col justify-between shadow-[6px_6px_0_0_#F8FAFC]">
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase leading-tight mb-4">Whole House <br/><span className="text-[#F97316]">Surge Protection</span></h3>
                    <p className="text-base text-slate-300 font-medium mb-8">One power surge can ruin your appliances. Get heavy-duty panels integrated directly at the source.</p>
                  </div>
                  <Link to="/surge-protection" className="inline-flex items-center gap-2 text-base font-black uppercase tracking-wider text-[#F97316] group-hover:text-white transition-colors border-b-2 border-[#F97316] group-hover:border-white self-start pb-1">
                    View Solutions <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              {/* Specialty Services Teaser Block */}
              <div className="relative pt-8">
                <div className="absolute top-0 left-8 bg-slate-200 text-[#131924] font-black px-6 py-2 uppercase tracking-widest border-2 border-[#131924] z-10 text-sm">
                  Service 03
                </div>
                <div className="bg-slate-50 text-[#131924] border-4 border-[#131924] p-8 pt-12 hover:-translate-y-2 transition-transform duration-300 relative group h-full flex flex-col justify-between shadow-[6px_6px_0_0_#131924]">
                  <div>
                    <h3 className="text-2xl font-black text-[#131924] uppercase leading-tight mb-4">Security & <br/><span className="text-slate-500">Panel Grounding</span></h3>
                    <p className="text-base text-slate-600 font-medium mb-8">Total home security goes beyond the front door lock. Add HD surveillance and ground your property.</p>
                  </div>
                  <Link to="/specialty-services" className="inline-flex items-center gap-2 text-base font-black uppercase tracking-wider text-[#131924] group-hover:text-slate-500 transition-colors border-b-2 border-[#131924] group-hover:border-slate-500 self-start pb-1">
                    Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

           </div>
        </div>
      </section>

      <ThreeStepPlan />

      {/* About the Guide */}
      <section id="about" className="py-24 bg-white relative overflow-hidden border-t-4 border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="relative">
              <div className="bg-[#F97316] p-8 md:p-12 shadow-2xl relative z-20 translate-y-8 lg:translate-x-8">
                <Target className="w-12 h-12 text-white mb-6" />
                <h4 className="text-2xl font-black text-white uppercase tracking-wider mb-6">Our Mission</h4>
                <p className="text-white/90 text-lg leading-relaxed font-medium">
                  "Our mission is to provide quality electrical service and installation at a fair and balanced price. Electri-City Utah LLC has been in business since 1997. We enjoy the start-to-finish rewards of pleasing our clients."
                </p>
              </div>
              <div className="absolute inset-0 border-4 border-[#131924] -z-10 translate-x-4 -translate-y-4 bg-slate-100"></div>
            </div>

            <div className="flex flex-col justify-center mt-12 lg:mt-0 lg:pl-12">
              <h2 className="text-xl text-[#F97316] font-black uppercase tracking-widest mb-4">Your Expert Guide</h2>
              <h3 className="text-4xl md:text-5xl font-black text-[#131924] uppercase tracking-tighter mb-8 leading-tight">Empowering Wasatch <br/> Front Families.</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#131924] p-3 text-white"><CheckCircle2 className="w-6 h-6" /></div>
                  <div>
                    <h5 className="text-xl font-bold text-[#131924]">Licensed Master Electricians</h5>
                    <p className="text-slate-600 font-medium mt-1">State of Utah certified, fully bonded and insured.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#131924] p-3 text-white"><CheckCircle2 className="w-6 h-6" /></div>
                  <div>
                    <h5 className="text-xl font-bold text-[#131924]">Strictly Vetted Staff</h5>
                    <p className="text-slate-600 font-medium mt-1">All employees pass rigorous background checks and drug screenings.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <ContactForm />
    </>
  );
}
