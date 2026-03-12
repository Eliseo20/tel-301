import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronRight, ImageIcon, Menu, X, Magnet } from 'lucide-react';

export const TechnicalImage = ({ src, alt, title, id, height = "h-auto" }) => (
  <div className="w-full bg-slate-900/40 rounded-3xl overflow-hidden border border-white/5 mt-4 mb-2 group">
    <div className={`relative ${height} flex items-center justify-center bg-slate-900/20 px-4 py-8`}>
      <img 
        src={src} 
        alt={alt} 
        className="max-w-full max-h-[400px] w-auto h-auto object-contain transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg">
        <p className="text-[10px] text-primary-400 font-mono tracking-tighter uppercase">{id}</p>
      </div>
    </div>
    <div className="p-4 bg-slate-900/60 border-t border-white/5">
      <p className="text-sm font-bold text-slate-200 flex items-center gap-2 uppercase tracking-wider">
        <ImageIcon className="w-4 h-4 text-primary-500" />
        {title}
      </p>
    </div>
  </div>
);

export const CollapsibleSection = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all outline-none cursor-pointer group"
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl transition-colors duration-300 ${isOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400'}`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className="text-left">
            <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-400 transition-colors uppercase tracking-tight">{title}</h2>
          </div>
        </div>
        <div className={`p-2 rounded-full ${isOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
          {isOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
        </div>
      </button>
      <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'opacity-100 max-h-[5000px] mt-2' : 'opacity-0 max-h-0'}`}>
        <div className="glass-morphism rounded-[2rem] p-6 md:p-8 border border-primary-500/10">
          {children}
        </div>
      </div>
    </div>
  );
};

export const TopicLayout = ({ title, objective, unit = "Unidad 1: Fundamentos", onBack, children, calloutTitle, calloutText, calloutBadge }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const topics = [
    { name: "Magnetismo", path: "/magnetismo" },
    { name: "Ferromagnetismo", path: "/ferromagnetismo" },
    { name: "Electroimanes", path: "/electroimanes" },
    { name: "Campo Magnético", path: "/campo-magnetico" },
    { name: "Flujo Magnético", path: "/flujo-magnetico" },
    { name: "Fuerza de Lorentz", path: "/fuerza-lorentz" },
    { name: "Ley de Ohm Magnética", path: "/ley-ohm-magnetica" },
    { name: "Seguridad Magnética", path: "/seguridad-magnetica" },
    { name: "Ley de Gauss", path: "/ley-gauss" },
    { name: "Leyes de Faraday", path: "/leyes-faraday" },
    { name: "Inducción", path: "/induccion" },
    { name: "Ley de Lenz", path: "/ley-lenz" },
    { name: "Formación Científica", path: "/formacion-cientifica" },
    { name: "Transformadores", path: "/transformadores-gral" },
    { name: "Transformador Elevador", path: "/transformador-elevador" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-primary-500/30">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-primary-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <aside 
          className={`absolute top-0 right-0 h-full w-full max-w-sm glass-morphism border-l border-white/10 shadow-2xl transition-transform duration-500 ease-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-8 flex flex-col h-full">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-black text-white tracking-tight uppercase italic flex items-center gap-2">
                <Magnet className="text-primary-500" /> Temario
              </h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <nav className="flex-grow space-y-2 overflow-y-auto pr-2 custom-scrollbar">
              <Link 
                to="/" 
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/5 text-slate-400 hover:text-primary-400 transition-all font-bold group"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                Inicio de Plataforma
              </Link>
              <div className="h-px bg-white/5 my-4"></div>
              {topics.map((topic, index) => (
                <Link
                  key={topic.path}
                  to={topic.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all font-bold group ${window.location.hash.includes(topic.path) ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20' : 'hover:bg-white/5 text-slate-300 hover:text-white'}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm transition-colors ${window.location.hash.includes(topic.path) ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20' : 'bg-slate-900 text-slate-500 group-hover:bg-slate-800 group-hover:text-primary-400'}`}>
                    {index + 1}
                  </div>
                  {topic.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto pt-8 border-t border-white/5">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-black text-center">TEL-301 - Máquinas Eléctricas</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4">
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-bold transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Volver al Inicio
            </button>
            
            <div>
              <p className="text-primary-500 font-bold text-sm uppercase tracking-widest mb-1 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary-500"></span>
                {unit}
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                {title}
              </h1>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="group relative flex items-center gap-4 bg-slate-900/40 backdrop-blur-xl px-8 py-5 rounded-[2rem] border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-emerald-500/5 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex flex-col items-start">
              <p className="text-[10px] text-emerald-500/60 uppercase font-black tracking-[0.2em] mb-0.5">Navegación</p>
              <p className="text-xl font-black text-white tracking-tight uppercase italic flex items-center gap-3">
                Temario
              </p>
            </div>
            <div className="relative w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-inner">
              <Menu className="w-6 h-6 group-hover:rotate-180 transition-transform duration-700" />
            </div>
          </button>
        </header>

        {/* Objective Card */}
        {objective && (
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 to-indigo-600/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-morphism rounded-[2rem] p-8 md:p-10 border border-white/10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center shrink-0 border border-primary-500/30 shadow-lg shadow-primary-500/10">
                <span className="text-2xl font-black text-primary-400">01</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-white font-black uppercase tracking-tight text-xl flex items-center gap-2">
                   Objetivo de Aprendizaje
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed text-justify">
                  {objective}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Main Content Area */}
        <main className="space-y-8">
          {children}
        </main>

        {/* Footer Callout */}
        <footer className="bg-gradient-to-r from-primary-600/20 to-indigo-600/20 p-[1px] rounded-[2.5rem] mt-16 shadow-2xl">
          <div className="bg-slate-950/40 backdrop-blur-xl rounded-[calc(2.5rem-1px)] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center border border-white/5">
            <div className="flex-1 space-y-4 z-10 text-center md:text-left">
              <h2 className="text-3xl font-black text-white">{calloutTitle || "Resumen Técnico"}</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                {calloutText}
              </p>
            </div>
            {calloutBadge && (
              <div className="z-10 bg-primary-500/20 p-6 rounded-3xl border border-primary-500/30 min-w-[200px] shadow-xl">
                <p className="text-primary-300 font-bold text-center uppercase tracking-widest text-sm">{calloutBadge}</p>
              </div>
            )}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          </div>
        </footer>

      </div>
    </div>
  );
};
