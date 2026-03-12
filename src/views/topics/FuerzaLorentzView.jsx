import React, { useState } from 'react';
import { ArrowLeft, Target, Magnet, Zap, BookOpen, ChevronDown, ChevronRight, Activity, Move, ImageIcon } from 'lucide-react';
import lorentzImg from '../../assets/IMG_LORENTZ_001.png';

const TechnicalImage = ({ src, alt, title, id, height = "h-auto" }) => (
  <div className="w-full bg-slate-900/40 rounded-3xl overflow-hidden border border-white/5 mt-4 mb-2 group">
    <div className={`relative ${height} flex items-center justify-center bg-slate-900/20`}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
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

const FuerzaLorentzView = ({ onBack }) => {
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
            Tema 6
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Fuerza de <span className="text-primary-500">Lorentz</span>
          </h1>
        </div>
      </header>

      {/* 1. Objetivo de Aprendizaje */}
      <CollapsibleSection title="Objetivo de Aprendizaje" icon={Target} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          Analizar y calcular la fuerza mecánica ejercida sobre una carga eléctrica o un conductor portador de corriente que se mueve dentro de un campo magnético, para comprender el principio de torque en motores eléctricos.
        </p>
      </CollapsibleSection>

      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Zap}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Esta es la ley que hace girar a todos los motores eléctricos. Es fundamental para el técnico que realiza diagnóstico de motores. Al entender que la fuerza es proporcional a la corriente (<span className="text-white font-bold italic">F = B · L · I</span>), el técnico sabe que si un motor consume corriente excesiva y no tiene torque, es probable que la densidad de flujo (B) del estator esté degradada.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Los técnicos de ascensores o tracción dependen de este principio para calibrar los sistemas de frenado y aceleración.
          </p>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Motorización */}
      <CollapsibleSection title="Dirección de la Fuerza y Par Motor" icon={Move}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La Fuerza de Lorentz establece que una carga que se mueve en un campo magnético experimenta una fuerza perpendicular tanto a su velocidad como al campo. Para un conductor con corriente, la fuerza resultante es perpendicular a la corriente y al campo.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="p-6 bg-primary-600/10 border-l-4 border-primary-500 rounded-r-2xl">
                <h3 className="text-white font-bold mb-2">Regla de la Mano Derecha</h3>
                <p className="text-slate-300 leading-relaxed text-justify">
                  Como técnicos, usamos esta regla para visualizar la dirección de la fuerza. En un motor, los conductores del rotor están inmersos en el campo del estator; la fuerza de Lorentz empuja estos conductores, creando el torque.
                </p>
              </div>
              <p className="text-slate-300 leading-relaxed text-justify">
                Si la dirección de la corriente o la polaridad del campo magnético se invierte, la dirección de la fuerza también se invierte. Esta es la base de cómo funcionan los <span className="text-primary-400 font-bold tracking-tight">inversores de giro</span> en los contactores de control.
              </p>
            </div>
            
            <TechnicalImage 
              src={lorentzImg} 
              alt="Trayectoria de una partícula en un campo magnético" 
              title="Simulación física de trayectoria curva"
              id="IMG_LORENTZ_001"
            />
          </div>
        </div>
      </CollapsibleSection>

    </div>
  );
};

export default FuerzaLorentzView;
