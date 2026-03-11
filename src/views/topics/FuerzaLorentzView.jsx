import React, { useState } from 'react';
import { ArrowLeft, Target, Magnet, Zap, BookOpen, ChevronDown, ChevronRight, Activity, Move } from 'lucide-react';

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
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Fuerza de Lorentz
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
            
            <div className="glass-morphism rounded-3xl p-6 border border-primary-500/10 bg-slate-950">
              <img 
                src="/src/assets/IMG_LORENTZ_001.png" 
                alt="Trayectoria de una partícula en un campo magnético" 
                className="w-full h-auto rounded-2xl shadow-2xl brightness-125"
              />
              <p className="text-slate-500 text-[10px] mt-4 italic text-center uppercase tracking-widest">
                ID: IMG_LORENTZ_001 | Simulación física de trayectoria curva
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

    </div>
  );
};

export default FuerzaLorentzView;
