import { Clock, Phone, MapPin } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-2xl relative z-20">
          
          {/* Info Side */}
          <div className="lg:col-span-5 bg-[#131924] text-white p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -bottom-24 -right-24 w-64 h-64 border-[40px] border-[#1a2333] rounded-full opacity-50 pointer-events-none"></div>
            
            <h2 className="text-4xl font-black uppercase tracking-tight mb-8">
              Dispatch & <br/><span className="text-[#F97316]">Contact</span>
            </h2>
            
            <div className="space-y-12 relative z-10">
              
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Phone / Text
                </h4>
                <a href="tel:8015125798" className="text-3xl font-black text-white hover:text-[#F97316] transition-colors border-b-2 border-[#F97316] pb-1">
                  801.512.5798
                </a>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Service Area
                </h4>
                <p className="text-xl font-bold">The Wasatch Front, Utah</p>
                <p className="text-slate-400 mt-1">Draper, Salt Lake City & Surrounding areas</p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5" /> Operating Hours
                </h4>
                <ul className="space-y-2 text-lg">
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold">Mon - Fri</span>
                    <span className="text-slate-400">9:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="font-bold">Sat & Sun</span>
                    <span className="text-slate-400">Closed</span>
                  </li>
                </ul>
                <div className="mt-6 bg-[#F97316] text-white px-4 py-3 font-bold uppercase tracking-wider text-sm flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  24/7 Emergency Dispatch
                </div>
              </div>

            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-10 md:p-16 border-4 border-[#131924] lg:border-l-0">
            <h3 className="text-3xl font-black text-[#131924] uppercase mb-4">Request a Quote or Inspection</h3>
            <p className="text-slate-500 font-medium mb-10">Fill out the details below. We prioritize all inbound quotes and emergency requests.</p>
            
            {isSubmitted ? (
               <div className="h-full flex flex-col items-center justify-center py-20 text-center">
                 <div className="w-20 h-20 bg-[#131924] text-[#F97316] flex items-center justify-center mb-6 shadow-[8px_8px_0_0_#F97316]">
                   <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <h4 className="text-3xl font-black uppercase text-[#131924]">Transmission Sent</h4>
                 <p className="text-slate-500 font-medium mt-4">We've received your request and will contact you shortly.</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-[#131924] mb-2">Name</label>
                    <input type="text" required className="w-full bg-slate-50 border-2 border-slate-200 px-4 py-4 focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-[#131924] mb-2">Phone</label>
                    <input type="tel" required className="w-full bg-slate-50 border-2 border-slate-200 px-4 py-4 focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors" placeholder="(801) 512-5798" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#131924] mb-2">Interest / Service</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border-2 border-slate-200 px-4 py-4 focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors appearance-none font-bold text-slate-700">
                      <option>60-Point Home Inspection</option>
                      <option>Surge Panel Quote</option>
                      <option>Emergency Repair</option>
                      <option>Security Camera Install</option>
                      <option>Other / General</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#131924] mb-2">Project Details</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-2 border-slate-200 px-4 py-4 focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors resize-none placeholder:text-slate-400" placeholder="Briefly describe your needs..."></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-black text-white bg-[#131924] w-full overflow-hidden transition-all uppercase tracking-widest">
                    <div className="absolute inset-0 w-full h-full -ml-16 translate-x-[-100%] bg-[#F97316] transition-transform duration-500 ease-in-out group-hover:translate-x-[0%]"></div>
                    <span className="relative">Submit Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

