import React, { useState } from 'react';
import { ArrowLeft, Target, Magnet, Zap, BookOpen, ChevronDown, ChevronRight, Activity, Gauge, ImageIcon } from 'lucide-react';
import flujoImg from '../../assets/IMG_FLUJO_001.png';

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

const FlujoMagneticoView = ({ onBack }) => {
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
            Tema 5
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Flujo <span className="text-primary-500">Magnético</span>
          </h1>
        </div>
      </header>

      {/* 1. Objetivo de Aprendizaje */}
      <CollapsibleSection title="Objetivo de Aprendizaje" icon={Target} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          Cuantificar la cantidad total de campo magnético (Φ) que atraviesa una superficie dada, considerando la densidad de líneas y el ángulo de incidencia, para evaluar la eficiencia de circuitos magnéticos en transformadores y motores.
        </p>
      </CollapsibleSection>

      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Zap}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El flujo magnético es la "cantidad de energía" que estamos moviendo. Un técnico especialista en mantenimiento de transformadores debe dominar este concepto. Si el flujo es insuficiente, el transformador no entregará la potencia de placa. Si el flujo es excesivo, el núcleo se saturará. 
          </p>
          <div className="p-6 bg-primary-500/5 rounded-2xl border border-primary-500/20">
            <p className="text-slate-300 leading-relaxed text-justify">
              La medición de flujo (usando Gaussímetros) es vital para técnicos que trabajan con prensas magnéticas o sistemas de levitación, garantizando que la fuerza de sujeción sea la nominal.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Densidad y Área */}
      <CollapsibleSection title="Densidad de Flujo (B) y Área" icon={Gauge}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El flujo magnético (Φ), medido en <span className="text-white font-bold">Webers (Wb)</span>, depende de la Densidad de Flujo (B), medida en <span className="text-white font-bold">Teslas (T)</span> o Gauss (G), y del área (A) que atraviesa.
          </p>
          
          <div className="bg-slate-900/80 p-8 rounded-[2rem] border border-primary-500/20 text-center shadow-inner my-8">
            <span className="text-3xl md:text-5xl font-black text-primary-400 font-mono tracking-widest uppercase">Φ = B · A · cosθ</span>
            <p className="text-xs text-slate-500 mt-4 uppercase tracking-[0.2em] font-bold italic">La orientación es tan importante como la fuerza</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed text-justify">
                Un núcleo de transformador moderno de alta eficiencia opera con densidades de flujo de hasta <span className="text-white font-bold tracking-tight">1.7 Teslas</span>. Para un técnico en bobinado, el ángulo de incidencia (θ) es crítico. 
              </p>
              <p className="text-slate-300 leading-relaxed text-justify">
                Si las espiras de una bobina no están perfectamente alineadas perpendicularmente al flujo (ángulo 0°, coseno 1), la FEM inducida será menor a la calculada. Un mal encintado o una bobina deformada físicamente reduce el flujo concatenado efectivo, lo que provoca desequilibrios de fase en motores trifásicos.
              </p>
            </div>
            <TechnicalImage 
              src={flujoImg} 
              alt="Diagrama de Flujo Magnético y Ángulo Theta" 
              title="Análisis vectorial del flujo"
              id="IMG_FLUJO_001"
            />
          </div>
        </div>
      </CollapsibleSection>

    </div>
  );
};

export default FlujoMagneticoView;
