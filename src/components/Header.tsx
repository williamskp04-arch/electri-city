import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap, AlertOctagon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div className="bg-[#F97316] text-[#131924] py-2 px-4 shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center text-sm font-black uppercase tracking-wider">
          <AlertOctagon className="w-5 h-5 animate-pulse" />
          <span>24/7 Emergency Dispatch Available &mdash; Call or Text: <a href="tel:8015125798" className="underline hover:text-white transition-colors">801.512.5798</a></span>
        </div>
      </div>
      <header className="sticky top-0 z-40 bg-[#131924] text-[#F8FAFC] shadow-2xl border-b-[3px] border-[#F97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Asymmetrical Brand Logo */}
            <Link to="/" className="flex items-center gap-3 relative group cursor-pointer">
              <div className="bg-[#F97316] p-2 rotate-3 transform shadow-[4px_4px_0_0_rgba(255,255,255,0.1)] transition-transform group-hover:scale-105">
                <Zap className="w-8 h-8 text-white -rotate-3" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none text-white">
                  Electri-City
                </h1>
                <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-[#F97316] uppercase ml-1">
                  Utah LLC
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link to="/" className="text-sm font-bold uppercase tracking-widest hover:text-[#F97316] transition-colors">
                Home
              </Link>
              
              {/* Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 text-sm font-bold uppercase tracking-widest hover:text-[#F97316] transition-colors focus:outline-none"
                >
                  Residential <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-72 bg-white border-t-4 border-[#F97316] shadow-2xl animate-in fade-in slide-in-from-top-4 origin-top z-50">
                    <div className="flex flex-col">
                      <Link 
                        to="/electrical-inspection"
                        className="text-left px-6 py-5 text-slate-800 hover:bg-slate-50 hover:text-[#F97316] font-black uppercase tracking-wider text-sm border-b border-slate-100 transition-colors"
                      >
                        Electrical Inspection
                      </Link>
                      <Link 
                        to="/surge-protection"
                        className="text-left px-6 py-5 text-slate-800 hover:bg-slate-50 hover:text-[#F97316] font-black uppercase tracking-wider text-sm border-b border-slate-100 transition-colors"
                      >
                        Surge Protection
                      </Link>
                      <Link 
                        to="/specialty-services"
                        className="text-left px-6 py-5 text-slate-800 hover:bg-slate-50 hover:text-[#F97316] font-black uppercase tracking-wider text-sm transition-colors"
                      >
                        Specialty Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/#about" className="text-sm font-bold uppercase tracking-widest hover:text-[#F97316] transition-colors" onClick={() => { setTimeout(() => document.getElementById('about')?.scrollIntoView(), 100) }}>
                About
              </Link>
              <Link to="/gallery" className="text-sm font-bold uppercase tracking-widest hover:text-[#F97316] transition-colors">
                Gallery
              </Link>
            </nav>

            {/* CTA Right */}
            <div className="hidden lg:block">
              <a href="tel:8015125798" className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-[#F97316] overflow-hidden transition-all hover:bg-[#c2410a]">
                <div className="absolute inset-0 w-full h-full -ml-16 translate-x-[-100%] bg-white opacity-20 group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out skew-x-12"></div>
                <span className="relative flex items-center gap-2 uppercase tracking-wider">
                  Call or Text: <span className="text-white">801.512.5798</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 text-white hover:text-[#F97316] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#131924] border-t border-[#131924] absolute w-full shadow-2xl h-screen z-50">
            <div className="flex flex-col px-6 py-6 pb-12 space-y-6">
              <Link to="/" className="text-lg font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-4">Home</Link>
              
              <div className="space-y-4 border-b border-slate-800 pb-4">
                <div className="text-lg font-bold uppercase tracking-widest text-[#F97316]">Residential</div>
                <div className="pl-4 flex flex-col space-y-4">
                  <Link to="/electrical-inspection" className="text-left text-white font-medium hover:text-[#F97316]">Electrical Inspection</Link>
                  <Link to="/surge-protection" className="text-left text-white font-medium hover:text-[#F97316]">Surge Protection</Link>
                  <Link to="/specialty-services" className="text-left text-white font-medium hover:text-[#F97316]">Specialty Services</Link>
                </div>
              </div>
              
              <Link to="/#about" onClick={() => { setTimeout(() => document.getElementById('about')?.scrollIntoView(), 100) }} className="text-lg font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-4">About</Link>
              <Link to="/gallery" className="text-lg font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-4">Gallery</Link>
              
              <div className="pt-4">
                <a href="tel:8015125798" className="flex items-center justify-center gap-2 bg-[#F97316] text-white px-5 py-5 font-bold uppercase tracking-widest w-full shadow-[4px_4px_0_0_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-none transition-all">
                  801.512.5798
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
