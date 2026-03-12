import React, { useState } from 'react';
import { ArrowLeft, Target, ImageIcon, BookOpen, ChevronDown, ChevronRight, Zap, Magnet, Cpu, AlertTriangle } from 'lucide-react';
import gaussImg from '../../assets/gauss_diagram.png';

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

const LeyGaussView = ({ onBack }) => {
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
            Flujo Electromagnético según la <span className="text-primary-500">Ley de Gauss</span>
          </h1>
        </div>
      </header>

      {/* 1. Objetivo de Aprendizaje */}
      <CollapsibleSection title="Objetivo de Aprendizaje" icon={Target} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify font-medium max-w-3xl mx-auto">
          Comprender la naturaleza cerrada de las líneas de flujo magnético para diferenciar el comportamiento del campo magnético frente al eléctrico, facilitando el diagnóstico de fugas de flujo en carcasas de máquinas.
        </p>
      </CollapsibleSection>

      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Cpu}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed text-lg text-justify">
              Este concepto parece abstracto, pero para el técnico de mantenimiento predictivo y análisis de vibraciones, es la base de por qué existen los flujos de dispersión. Si un técnico mide magnetismo en la carcasa exterior de un motor, la Ley de Gauss le explica que ese flujo "se está escapando" del núcleo.
            </p>
            <div className="p-4 bg-primary-500/10 border border-primary-500/30 rounded-2xl flex items-start gap-3">
              <Zap className="text-primary-400 w-6 h-6 shrink-0 mt-1" />
              <p className="text-sm text-slate-300 italic text-justify">
                Es vital para quienes instalan sensores de flujo magnético para detectar barras rotas en el rotor de un motor de inducción sin necesidad de desarmarlo.
              </p>
            </div>
          </div>
          <div className="p-6 bg-slate-900/60 rounded-3xl border border-white/5 space-y-4">
            <h3 className="text-white font-bold flex items-center gap-2 underline decoration-primary-500 underline-offset-4">Aplicaciones en Terreno</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">• Detección de barras rotas en rotores</li>
              <li className="flex items-center gap-2">• Análisis de flujos de dispersión</li>
              <li className="flex items-center gap-2">• Diagnóstico de fugas en carcasas</li>
              <li className="flex items-center gap-2">• Medición de magnetismo residual</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Inexistencia del Monopolo */}
      <CollapsibleSection title="Inexistencia del Monopolo" icon={Magnet}>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg text-justify">
                La Ley de Gauss para el magnetismo establece que el flujo magnético neto a través de cualquier superficie cerrada es siempre cero (∮ B · dA = 0). En términos prácticos para un técnico: todo lo que sale de un polo norte debe entrar en un polo sur.
              </p>
              <div className="bg-slate-900/80 p-6 rounded-[2rem] border border-primary-500/20 text-center shadow-inner">
                <span className="text-3xl font-black text-primary-400 font-mono tracking-widest uppercase">∮ B · dA = 0</span>
                <p className="text-xs text-slate-500 mt-2 uppercase tracking-[0.2em] font-bold">Flujo Neto en Superficie Cerrada</p>
              </div>
              <p className="text-slate-300 leading-relaxed text-justify">
                No existen "cargas magnéticas" aisladas como ocurre con la electricidad (donde sí hay electrones sueltos). En una máquina ideal, todo el flujo debería circular por el hierro del estator y el rotor. Sin embargo, en la práctica existe el flujo de dispersión.
              </p>
            </div>
            
            <div className="w-full md:w-1/3">
              <TechnicalImage 
                src={gaussImg}
                alt="Diagrama de flujo magnético en un estator"
                title="Flujo de Dispersión y Ley de Gauss"
                id="IMG_GAUSS_001"
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 4. Consecuencias de fallas relacionadas */}
      <CollapsibleSection title="Consecuencias de Fugas de Flujo" icon={AlertTriangle}>
        <div className="space-y-6">
          <div className="p-6 bg-red-600/10 border-l-4 border-red-500 rounded-r-2xl">
             <h3 className="text-white font-black text-xl mb-2 flex items-center gap-2">
                <AlertTriangle className="text-red-400" /> Impacto en la Operación
             </h3>
             <p className="text-slate-300 leading-relaxed text-justify">
                Este flujo de dispersión no atraviesa el entrehierro y, por tanto, no produce trabajo útil. Como técnicos, detectamos esto mediante el calentamiento de las partes metálicas no activas del motor.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-6 glass-morphism rounded-3xl border border-white/5 space-y-3">
                <h4 className="text-primary-400 font-bold">EMI (Interferencia)</h4>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">
                   El flujo que se escapa puede inducir voltajes no deseados en cables de control cercanos, provocando falsos disparos en PLCs o sensores.
                </p>
             </div>
             <div className="p-6 glass-morphism rounded-3xl border border-white/5 space-y-3">
                <h4 className="text-primary-400 font-bold">Corrientes de eje</h4>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">
                   El flujo asimétrico induce voltajes en el eje, que buscan descarga a través de los rodamientos, causando "pitting" y fallas catastróficas.
                </p>
             </div>
             <div className="p-6 glass-morphism rounded-3xl border border-white/5 space-y-3">
                <h4 className="text-primary-400 font-bold">Baja Eficiencia</h4>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">
                   Cada línea de flujo que no cruza el entrehierro es energía eléctrica que pagas pero que no se convierte en movimiento.
                </p>
             </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Callout Final Especial */}
      <div className="bg-gradient-to-br from-slate-900 to-primary-950 p-1 rounded-[3rem] mt-12 overflow-hidden border border-white/5 group transition-all duration-500 hover:border-primary-500/30">
        <div className="bg-slate-950/40 backdrop-blur-xl p-10 relative">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="bg-primary-500/20 p-8 rounded-[2.5rem] border border-primary-500/20 shrink-0 transform group-hover:rotate-6 transition-transform">
              <BookOpen className="w-12 h-12 text-primary-400" />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-black text-white leading-tight">Diagnóstico Avanzado</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl text-justify">
                Recuerde: Si detecta calentamiento excesivo en las tapas laterales del motor, investigue el flujo de dispersión. La Ley de Gauss es su herramienta teórica para justificar el rediseño de blindajes o la reubicación de cables de control.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 blur-[60px] rounded-full"></div>
        </div>
      </div>

    </div>
  );
};

export default LeyGaussView;
