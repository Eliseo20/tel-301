import React, { useState } from 'react';
import { ArrowLeft, Target, ImageIcon, BookOpen, ChevronDown, ChevronRight, Zap, Magnet, Activity, Layers } from 'lucide-react';
import hysteresisImg from '../../assets/hysteresis_curve.png';
import laminatedCoreImg from '../../assets/laminated_core.png';

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

const FerromagnetismoView = ({ onBack }) => {
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
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Materiales <span className="text-primary-500">Ferromagnéticos</span>
          </h1>
        </div>
      </header>

      {/* 1. Objetivo de Aprendizaje */}
      <CollapsibleSection title="Objetivo de Aprendizaje" icon={Target} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg">
          Identificar el comportamiento de materiales como el <span className="text-white font-bold">hierro, cobalto y níquel</span> bajo la influencia de campos magnéticos para seleccionar repuestos adecuados y diagnosticar fallas por saturación o fatiga magnética.
        </p>
      </CollapsibleSection>

      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Zap}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg">
            En el ejercicio diario, un técnico de mantenimiento eléctrico o de bobinado debe entender que no cualquier acero sirve para un núcleo. Si reemplazas un perno o una chapa original por una de acero común, puedes provocar que el equipo se <span className="text-red-400 font-bold">sobrecaliente en minutos</span>.
          </p>
          <div className="p-6 bg-primary-500/5 rounded-2xl border border-primary-500/20">
            <p className="text-slate-300 leading-relaxed">
              Los técnicos que trabajan con <span className="text-primary-400 font-bold">servomotores y variadores de frecuencia</span> son quienes más deben vigilar estas características, ya que la respuesta del material afecta directamente el control de precisión de la máquina.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Permeabilidad y Saturación */}
      <CollapsibleSection title="Permeabilidad y Saturación" icon={Magnet}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg">
            Los materiales ferromagnéticos son la "autopista" del flujo magnético. Poseen una <span className="text-white font-bold">alta permeabilidad (μ)</span>, lo que significa que permiten que las líneas de campo pasen por ellos con mucha facilidad en comparación con el aire.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5 space-y-4 h-full">
              <h3 className="text-primary-400 font-bold flex items-center gap-2">
                <Activity className="w-5 h-5" /> El Límite de Saturación
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Cuando un núcleo llega a la saturación, por más que aumentes la corriente en la bobina, el flujo ya no aumenta. Para un técnico, esto se traduce en una pérdida drástica de eficiencia y un aumento peligroso de la corriente (amperaje).
              </p>
            </div>
            
            <TechnicalImage 
              src={hysteresisImg}
              alt="Curva de Histéresis B-H"
              title="Gráfico Técnico - Curva de Histéresis"
              id="IMG_FERRO_001"
            />
          </div>
          
          <p className="text-slate-400 italic text-sm border-l-4 border-primary-500/30 pl-4 py-2">
            La saturación puede disparar las protecciones térmicas sin una causa mecánica aparente.
          </p>
        </div>
      </CollapsibleSection>

      {/* 4. La Histéresis y sus Consecuencias */}
      <CollapsibleSection title="La Histéresis y sus Consecuencias" icon={BookOpen}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg">
            La histéresis es el "retraso" que sufre el material al magnetizarse y desmagnetizarse. Parte de la energía eléctrica se queda "atrapada" en el núcleo en forma de <span className="text-primary-400 font-bold">magnetismo remanente</span>.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-white font-bold text-xl">Consecuencias de una anomalía:</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-primary-500/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Sobrecalentamiento del núcleo</span>
                    <span className="text-slate-400 text-sm">La energía se disipa como calor, degradando el barniz aislante.</span>
                  </div>
                </li>
                <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-primary-500/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Vibración y Ruido (Zumbido)</span>
                    <span className="text-slate-400 text-sm">Magnetostricción: el material cambia de forma microscópicamente.</span>
                  </div>
                </li>
                <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-primary-500/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Magnet className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Pérdida de Torque</span>
                    <span className="text-slate-400 text-sm">Reduce la fuerza del par motor, obligando a consumir más corriente.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <TechnicalImage 
              src={laminatedCoreImg}
              alt="Núcleo Laminado vs Sólido"
              title="Eficiencia Energética en Núcleos"
              id="IMG_FERRO_002"
              height="h-full"
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* Callout Final */}
      <div className="bg-gradient-to-r from-primary-600 to-indigo-800 p-[1px] rounded-3xl mt-12 shadow-2xl shadow-primary-500/20 border-none">
        <div className="bg-slate-950 rounded-[23px] p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4 z-10 text-center md:text-left">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Resumen para Campo</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              El mantenimiento preventivo requiere vigilar el calor y el ruido inusual en los núcleos; estos son los primeros síntomas de una fatiga magnética inminente.
            </p>
          </div>
          <div className="z-10 bg-primary-500/20 p-6 rounded-2xl border border-primary-500/30 min-w-[200px]">
             <div className="flex items-center gap-3 mb-2">
                <Layers className="text-primary-400 w-5 h-5" />
                <p className="text-primary-300 font-bold uppercase tracking-widest text-sm">Clave Técnica</p>
             </div>
             <p className="text-slate-400 text-xs">A mayor frecuencia, mayor importancia del laminado.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FerromagnetismoView;
