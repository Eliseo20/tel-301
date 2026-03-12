import React, { useState } from 'react';
import { ArrowLeft, Target, Magnet, Zap, BookOpen, ChevronDown, ChevronRight, Activity, ShieldAlert, Gauge, ImageIcon } from 'lucide-react';
import ohmMagImg from '../../assets/IMG_OHMMAG_001.png';

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

const LeyOhmMagneticaView = ({ onBack }) => {
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
            Tema 7
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Ley de Ohm <span className="text-primary-500">Magnética</span>
          </h1>
        </div>
      </header>

      {/* 1. Objetivo de Aprendizaje */}
      <CollapsibleSection title="Objetivo de Aprendizaje" icon={Target} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          Calcular y dimensionar circuitos magnéticos utilizando la analogía de la Ley de Ohm eléctrica, permitiendo al técnico evaluar la eficiencia de núcleos en transformadores y motores mediante el concepto de reluctancia.
        </p>
      </CollapsibleSection>

      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Zap}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Aunque no todos los técnicos calculan reluctancias a diario, es vital para quienes se dedican al rediseño de bobinados o reparación de núcleos magnéticos. Si un técnico limpia un núcleo de transformador con abrasivos gruesos y aumenta el espacio entre las chapas, está aumentando la "resistencia" al paso del flujo.
          </p>
          <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/20">
            <p className="text-slate-300 leading-relaxed text-justify">
              Entender esta ley permite diagnosticar por qué un contactor zumba o no cierra con fuerza: si hay suciedad o aire en el entrehierro, la <span className="text-red-400 font-bold">reluctancia</span> sube tanto que la bobina no tiene fuerza suficiente para vencer el resorte, aunque el voltaje sea el correcto.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: FMM y Reluctancia */}
      <CollapsibleSection title="Fuerza Magnetomotriz y Reluctancia" icon={Gauge}>
        <div className="space-y-8">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La Ley de Ohm magnética establece que el flujo magnético (Φ) es directamente proporcional a la Fuerza Magnetomotriz (FMM) e inversamente proporcional a la Reluctancia (ℜ).
          </p>

          <div className="bg-slate-900/80 p-8 rounded-[2rem] border border-primary-500/20 text-center shadow-inner my-8">
            <span className="text-3xl md:text-5xl font-black text-primary-400 font-mono tracking-widest uppercase">ℱ = Φ · ℛ</span>
            <p className="text-xs text-slate-500 mt-4 uppercase tracking-[0.2em] font-bold italic">La ley de Hopkinson o analogía de Ohm</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed text-justify">
                Como técnicos, debemos ver la <span className="text-white font-bold">FMM (N · I)</span> como la "presión" generada por la bobina, y la <span className="text-white font-bold">Reluctancia</span> como la oposición que ofrece el camino (hierro o aire). 
              </p>
              <div className="p-6 bg-primary-500/5 rounded-2xl border border-primary-500/20">
                <h4 className="text-primary-400 font-bold mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5" /> El Enemigo: El Aire
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm text-justify">
                  La permeabilidad del aire es miles de veces menor que la del acero silicoso; por lo tanto, una mínima separación en las juntas (corrosión o mal armado) dispara la reluctancia.
                </p>
              </div>
            </div>
            
            <TechnicalImage 
              src={ohmMagImg} 
              alt="Analogía entre circuito eléctrico y magnético" 
              title="Circuito eléctrico vs Circuito Magnético"
              id="IMG_OHMMAG_001"
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* 4. Consecuencias en el Mantenimiento */}
      <CollapsibleSection title="Efectos de la Alta Reluctancia" icon={Activity}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Cuando la reluctancia aumenta debido a una anomalía física, la corriente de magnetización de la bobina debe subir para intentar mantener el flujo necesario.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-full bg-red-400/10 text-red-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold">Corriente Elevada</h3>
              <p className="text-slate-400 text-sm">La bobina se calienta excesivamente tratando de "empujar" el flujo a través del aire.</p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                <Magnet className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold">Pérdida de Fuerza</h3>
              <p className="text-slate-400 text-sm">En frenos electromagnéticos, el disco puede patinar porque el flujo no es suficiente.</p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-400/10 text-blue-400 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold">Disparo de Protecciones</h3>
              <p className="text-slate-400 text-sm">Especialmente en el arranque si el circuito magnético no está perfectamente cerrado.</p>
            </div>
          </div>

          <p className="text-slate-400 italic text-sm text-center border-t border-white/5 pt-8">
            Un motor con el eje levemente desplazado o un entrehierro irregular consume más corriente en vacío que lo indicado en placa.
          </p>
        </div>
      </CollapsibleSection>

    </div>
  );
};

export default LeyOhmMagneticaView;
