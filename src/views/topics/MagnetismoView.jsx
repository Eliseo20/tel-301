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

const MagnetismoView = ({ onBack }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

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

      {/* B. Objetivo y Relevancia Técnico */}
      <section className="glass-morphism rounded-3xl p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-500/20 rounded-lg">
                <Target className="w-6 h-6 text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Objetivo de Aprendizaje</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              Comprender la naturaleza de los campos magnéticos y su interacción con conductores eléctricos para diagnosticar fallas de atracción, repulsión y blindaje en equipos electromecánicos.
            </p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 h-full">
            <h3 className="text-white font-bold flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary-400" /> ¿Por qué es importante para el técnico?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Para un técnico de mantenimiento, el magnetismo es la base para entender relés, magnetización de rodamientos o peinado de cables de potencia. Es el vehículo que permite la conversión de energía sin contacto físico.
            </p>
          </div>
        </div>
      </section>

      {/* C. Desarrollo Técnico */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-2">
           <Magnet className="w-6 h-6 text-primary-500" />
           <h2 className="text-3xl font-bold text-white tracking-tight">El Campo en la Práctica</h2>
        </div>
        
        <div className="glass-morphism rounded-3xl p-8">
          <p className="text-slate-300 leading-relaxed text-lg mb-8">
            El magnetismo es una propiedad física mediante la cual ciertos materiales ejercen fuerzas de atracción o repulsión. En el ámbito del módulo <span className="text-primary-400 font-bold">TEL-301</span>, nos interesa como el vehículo que permite la conversión de energía eléctrica en mecánica (motores) y viceversa (generadores).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Líneas de Inducción</h3>
              <p className="text-slate-400 leading-relaxed">
                Todo campo magnético se visualiza mediante líneas de inducción. Un punto crítico es que estas líneas siempre buscan el camino de <span className="text-white">menor resistencia (reluctancia)</span>. Si el entrehierro es irregular, el campo será asimétrico, provocando vibraciones mecánicas severas.
              </p>
            </div>
            <div className="relative">
              <ImagePlaceholder 
                id="IMG_TEL301_001" 
                title="Infografía: Imán y Solenoide" 
                height="h-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* D. Interacción y Polaridad */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="glass-morphism rounded-3xl p-8 h-full">
            <h3 className="text-2xl font-bold text-white mb-4">Interacción y Polaridad</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              La regla de oro en terreno es simple: <span className="text-primary-400 font-bold">polos iguales se repelen, polos opuestos se atraen</span>. En máquinas de CC, la inversión de estos polos permite que el motor siga girando.
            </p>
            <div className="bg-primary-500/5 border border-primary-500/20 p-4 rounded-xl">
               <p className="text-sm text-slate-300 italic">
                 "Un técnico que sepa identificar la polaridad magnética puede determinar si un devanado ha sido conectado al revés sin necesidad de desarmar toda la máquina."
               </p>
            </div>
          </div>
        </div>
        <div className="glass-morphism rounded-3xl p-6 flex flex-col justify-center">
          <ImagePlaceholder 
            id="IMG_TEL301_002" 
            title="Regla de la mano derecha"
            height="h-full"
          />
        </div>
      </section>

      {/* E. Sección Acordeón: Magnetismo Remanente */}
      <section className="space-y-4">
        <button 
          onClick={() => setIsDetailOpen(!isDetailOpen)} 
          className="w-full flex items-center justify-between p-6 glass-morphism rounded-2xl hover:bg-white/5 transition-all outline-none cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl transition-colors duration-300 ${isDetailOpen ? 'bg-primary-500 text-white' : 'bg-white/5 text-primary-400'}`}>
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">Magnetismo Remanente e Histéresis</h2>
            </div>
          </div>
          <div className={`p-2 rounded-full ${isDetailOpen ? 'bg-primary-500/10 text-primary-400' : 'bg-white/5 text-slate-400'}`}>
            {isDetailOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
          </div>
        </button>
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isDetailOpen ? 'opacity-100 max-h-[1000px] mt-4' : 'opacity-0 max-h-0'}`}>
          <div className="glass-morphism rounded-[2.5rem] p-8 border border-primary-500/10">
            <p className="text-slate-300 leading-relaxed">
              Es vital considerar el magnetismo remanente. En muchos contactores o frenos electromagnéticos, el material queda ligeramente magnetizado después de quitar la corriente. Si el técnico no conoce este fenómeno, podría confundir un problema mecánico (un resorte vencido) con un problema de histéresis del material del núcleo. Los técnicos de bobinado aplican estos conceptos para detectar fugas de flujo.
            </p>
          </div>
        </div>
      </section>

      {/* F. Callout Final */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20">
        <div className="bg-slate-950 rounded-[23px] p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4 z-10">
            <h2 className="text-3xl font-black text-white">Resumen Crítico</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              El magnetismo no es solo un fenómeno teórico; es la fuerza invisible que mueve la industria. Entender su comportamiento permite diagnósticos precisos en motores, generadores y sistemas de protección.
            </p>
          </div>
          <div className="z-10 bg-primary-500/20 p-6 rounded-2xl border border-primary-500/30 min-w-[200px]">
            <p className="text-primary-300 font-bold text-center">TEL-301 - Mantenimiento Eléctrico</p>
          </div>
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        </div>
      </div>

    </div>
  );
};

export default MagnetismoView;
