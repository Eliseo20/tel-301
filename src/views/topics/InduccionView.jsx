import React, { useState } from 'react';
import { ArrowLeft, Target, ImageIcon, BookOpen, ChevronDown, ChevronRight, Zap, Magnet } from 'lucide-react';

const ImagePlaceholder = ({ title, height = "h-48", id }) => (
  <div className={`w-full ${height} bg-slate-900/60 border-2 border-dashed border-primary-500/30 rounded-2xl flex flex-col items-center justify-center text-slate-500 hover:border-primary-500/60 hover:text-primary-400 hover:bg-slate-900/80 transition-all cursor-pointer group mt-4 mb-2`}>
    <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
    <p className="text-sm font-medium uppercase tracking-widest">{title}</p>
    <p className="text-xs mt-1 opacity-60">ID: {id}</p>
    <p className="text-[10px] mt-1 opacity-40 italic">(Espacio para imagen técnica)</p>
  </div>
);

const CollapsibleSection = ({ title, icon: Icon, children, defaultOpen = false }) => {
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
            <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors uppercase tracking-tight">{title}</h2>
          </div>
        </div>
        <div className={`p-2 rounded-full ${isOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
          {isOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
        </div>
      </button>
      <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? 'opacity-100 max-h-[2000px] mt-4' : 'opacity-0 max-h-0'}`}>
        <div className="glass-morphism rounded-[2rem] p-8 border border-primary-500/10">
          {children}
        </div>
      </div>
    </div>
  );
};

const InduccionView = ({ onBack }) => {
  return (
    <div className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">

      {/* A. Cabecera */}
      <header className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 rounded-full glass-morphism text-slate-400 hover:text-primary-400 hover:scale-110 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <p className="text-primary-500 font-bold text-sm uppercase tracking-widest mb-1 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary-500"></span>
            Unidad 1: Fundamentos
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Inducción Electromagnética
          </h1>
        </div>
      </header>

      {/* 1. Objetivo de Aprendizaje */}
      <CollapsibleSection title="Objetivo de Aprendizaje" icon={Target} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg">
          Comprender cómo un campo magnético variable puede inducir una fuerza electromotriz (FEM) en un conductor, principio fundamental de generadores y transformadores.
        </p>
      </CollapsibleSection>

      <ImagePlaceholder
        id="IMG_TEL301_004"
        title="Ley de Faraday"
        height="h-64"
      />

      {/* Callout Final */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20 border-none">
        <div className="bg-slate-950 rounded-[23px] p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4 z-10 text-center md:text-left">
            <h2 className="text-3xl font-black text-white">Próximamente</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Estamos desarrollando el contenido completo para esta sección.
            </p>
          </div>
          <div className="z-10 bg-primary-500/20 p-6 rounded-2xl border border-primary-500/30 min-w-[200px]">
            <p className="text-primary-300 font-bold text-center">En Desarrollo</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default InduccionView;
