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

const MagnetismoView = ({ onBack }) => {
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
            Magnetismo
          </h1>
        </div>
      </header>

      {/* 1. Objetivo de Aprendizaje */}
      <CollapsibleSection title="Objetivo de Aprendizaje" icon={Target} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg">
          Comprender la naturaleza de los campos magnéticos y su interacción con conductores eléctricos para diagnosticar fallas de atracción, repulsión y blindaje en equipos electromecánicos.
        </p>
      </CollapsibleSection>

      {/* 2. ¿Por qué es importante para el técnico? */}
      <CollapsibleSection title="¿Por qué es importante para el técnico?" icon={Zap}>
        <p className="text-slate-300 leading-relaxed text-lg">
          Para un técnico de mantenimiento, el magnetismo no es solo "imanes". Es la base para entender por qué un relé se pega, por qué un rodamiento se magnetiza y causa erosión eléctrica, o por qué los cables de potencia deben estar bien peinados en las bandejas. Si no entiendes el magnetismo, no entiendes cómo se transfiere la energía sin contacto físico. Los técnicos de bobinado y mantenimiento preventivo son quienes más aplican estos conceptos para detectar fugas de flujo o magnetismo remanente en ejes de motores.
        </p>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: El Campo en la Práctica */}
      <CollapsibleSection title="El Campo en la Práctica" icon={Magnet}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg">
            El magnetismo es una propiedad física mediante la cual ciertos materiales ejercen fuerzas de atracción o repulsión. En el ámbito del módulo, nos interesa el magnetismo como el vehículo que permite la conversión de energía eléctrica en mecánica (motores) y viceversa (generadores).
          </p>
          <p className="text-slate-300 leading-relaxed text-lg">
            Todo campo magnético se visualiza mediante líneas de inducción. Un punto crítico para el técnico es entender que estas líneas siempre buscan el camino de menor resistencia (reluctancia). En una máquina eléctrica, si el entrehierro (el espacio de aire entre el estator y el rotor) es irregular, el campo magnético será asimétrico, provocando vibraciones mecánicas severas y desgaste prematuro en los descansos.
          </p>
          <ImagePlaceholder
            id="IMG_TEL301_001"
            title="Infografía: Imán y Solenoide"
            height="h-64"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Interacción y Polaridad */}
      <CollapsibleSection title="Interacción y Polaridad" icon={BookOpen}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg">
            La regla de oro en terreno es simple: polos iguales se repelen, polos opuestos se atraen. Sin embargo, en máquinas de corriente continua, la inversión de estos polos (mediante la conmutación) es lo que permite que el motor siga girando. Un técnico que sepa identificar la polaridad magnética puede determinar si un devanado ha sido conectado al revés sin necesidad de desarmar toda la máquina, simplemente usando una brújula o un sensor de efecto Hall.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg bg-primary-500/5 p-6 rounded-2xl border border-primary-500/20 italic">
            Es vital considerar el magnetismo remanente. En muchos contactores o frenos electromagnéticos, el material queda ligeramente magnetizado después de quitar la corriente. Si el técnico no conoce este fenómeno, podría confundir un problema mecánico (un resorte vencido) con un problema de histéresis del material del núcleo.
          </p>
          <ImagePlaceholder
            id="IMG_TEL301_002"
            title="Regla de la mano derecha"
            height="h-64"
          />
        </div>
      </CollapsibleSection>

      {/* Callout Final */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20 border-none">
        <div className="bg-slate-950 rounded-[23px] p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4 z-10 text-center md:text-left">
            <h2 className="text-3xl font-black text-white">Resumen Técnico</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              El magnetismo es la base fundamental para la conversión de energía y el diagnóstico de maquinaria industrial.
            </p>
          </div>
          <div className="z-10 bg-primary-500/20 p-6 rounded-2xl border border-primary-500/30 min-w-[200px]">
            <p className="text-primary-300 font-bold text-center">Mantenimiento Eléctrico</p>
          </div>
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        </div>
      </div>

    </div>
  );
};

export default MagnetismoView;
