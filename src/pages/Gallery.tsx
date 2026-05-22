import ContactForm from '../components/ContactForm';
import { Camera } from 'lucide-react';

import img1 from '../assets/images/gallery_image_1.jpeg';
import img2 from '../assets/images/gallery_image_2.jpeg';
import img3 from '../assets/images/gallery_image_3.png';
import img4 from '../assets/images/gallery_image_4.jpeg';
import img5 from '../assets/images/gallery_image_5.jpeg';
import img6 from '../assets/images/gallery_image_6.jpeg';
import img7 from '../assets/images/gallery_image_7.jpeg';
import img8 from '../assets/images/gallery_image_8.jpeg';

const IMAGES = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
];

export default function Gallery() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#131924] pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden border-b-8 border-[#F97316]">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-[#F97316] mb-8 rotate-3 shadow-[4px_4px_0_0_rgba(255,255,255,0.1)]">
            <Camera className="w-10 h-10 text-white -rotate-3" />
          </div>
          <h2 className="text-[#F97316] font-black uppercase tracking-[0.2em] mb-4 text-sm md:text-base">
            Our Work
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
            Project <span className="text-[#F97316]">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent installations, safety upgrades, and electrical service projects across the Wasatch Front.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMAGES.map((src, index) => (
              <div 
                key={index}
                className="group relative aspect-square md:aspect-[4/5] overflow-hidden bg-slate-200 border-4 border-[#131924] shadow-[8px_8px_0_0_#F97316] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[#F97316]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={src} 
                  alt={`Project gallery visualization ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
