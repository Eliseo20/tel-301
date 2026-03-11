import React, { useState } from 'react';
import { ArrowLeft, Target, ImageIcon, BookOpen, ChevronDown, ChevronRight, Zap, Magnet, Cpu, AlertTriangle } from 'lucide-react';
import solenoidImg from '../../assets/solenoid.png';

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

const ElectroimanesView = ({ onBack }) => {
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
            Funcionamiento de <span className="text-primary-500">Electroimanes</span>
          </h1>
        </div>
      </header>

      {/* 1. Objetivo de Aprendizaje */}
      <CollapsibleSection title="Objetivo de Aprendizaje" icon={Target} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-center font-medium max-w-3xl mx-auto">
          Analizar el funcionamiento de <span className="text-white font-bold">solenoides y bobinas de accionamiento</span> para realizar el mantenimiento de contactores, frenos electromagnéticos y válvulas de control.
        </p>
      </CollapsibleSection>

      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Cpu}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed text-lg">
              El electroimán es el componente más común en los sistemas de control industrial. El técnico de automatización y control lo utiliza a diario en <span className="text-primary-400 font-bold">relés y solenoides</span>.
            </p>
            <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-start gap-3">
              <AlertTriangle className="text-orange-400 w-6 h-6 shrink-0 mt-1" />
              <p className="text-sm text-slate-300 italic">
                Una mala conexión o un voltaje incorrecto puede causar que el núcleo no "pegue" bien, generando un arco eléctrico que destruye los contactos.
              </p>
            </div>
          </div>
          <div className="p-6 bg-slate-900/60 rounded-3xl border border-white/5 space-y-4">
            <h3 className="text-white font-bold flex items-center gap-2 underline decoration-primary-500 underline-offset-4">Aplicaciones en Terreno</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">• Contactores Industriales</li>
              <li className="flex items-center gap-2">• Frenos de Grúas</li>
              <li className="flex items-center gap-2">• Electroválvulas de Neumática</li>
              <li className="flex items-center gap-2">• Relés de Maniobra</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Fuerza Magnetomotriz (FMM) */}
      <CollapsibleSection title="Fuerza Magnetomotriz (FMM)" icon={Zap}>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg">
                Un electroimán genera magnetismo mediante el paso de corriente por un conductor enrollado. Su fuerza depende de dos factores críticos:
              </p>
              <div className="bg-slate-900/80 p-6 rounded-[2rem] border border-primary-500/20 text-center shadow-inner">
                <span className="text-3xl font-black text-primary-400 font-mono tracking-widest uppercase">FMM = N · I</span>
                <p className="text-xs text-slate-500 mt-2 uppercase tracking-[0.2em] font-bold">N: Número de Espiras | I: Intensidad (Ampers)</p>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Si un solenoide pierde fuerza, generalmente es por un <span className="text-red-400 font-bold">cortocircuito entre espiras</span> que reduce el número efectivo de vueltas, o por una caída de tensión en la línea.
              </p>
            </div>
            
            <div className="w-full md:w-1/3">
              <TechnicalImage 
                src={solenoidImg}
                alt="Sección transversal de un solenoide"
                title="Corte Técnico de Solenoide"
                id="IMG_ELECTRO_001"
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 4. El Problema Crítico: Espira de Sombra */}
      <CollapsibleSection title="La Espira de Sombra" icon={BookOpen}>
        <div className="space-y-6">
          <div className="p-6 bg-primary-600/10 border-l-4 border-primary-500 rounded-r-2xl">
             <h3 className="text-white font-black text-xl mb-2 flex items-center gap-2">
                <AlertTriangle className="text-primary-400" /> El Anillo de Desfasaje
             </h3>
             <p className="text-slate-300 leading-relaxed">
                En electroimanes de <span className="text-primary-300 font-bold uppercase">Corriente Alterna</span>, el flujo pasa por cero 100 o 120 veces por segundo. Sin la espira de sombra (un pequeño anillo de cobre), el núcleo se soltaría y volvería a pegar en cada ciclo.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-8 glass-morphism rounded-3xl border border-red-500/10 space-y-4">
                <h4 className="text-red-400 font-bold flex items-center gap-2">Síntoma de Falla:</h4>
                <p className="text-slate-200 text-3xl font-black italic tracking-tighter">"ZUMBIDO VIOLENTO"</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                   Si el anillo de cobre se rompe, el electroimán vibrará violentamente a 100 o 120 Hz, provocando un ruido ensordecedor y el desgaste prematuro de las piezas mecánicas de impacto.
                </p>
             </div>
             <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   <p className="text-slate-300">Evita el "castañeo" del contactor.</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   <p className="text-slate-300">Genera un flujo magnético desfasado.</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   <p className="text-slate-300">Absorbe vibraciones mecánicas.</p>
                </div>
             </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Callout Final Especial */}
      <div className="bg-gradient-to-br from-slate-900 to-primary-950 p-1 rounded-[3rem] mt-12 overflow-hidden border border-white/5 group transition-all duration-500 hover:border-primary-500/30">
        <div className="bg-slate-950/40 backdrop-blur-xl p-10 relative">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="bg-primary-500/20 p-8 rounded-[2.5rem] border border-primary-500/20 shrink-0 transform group-hover:rotate-6 transition-transform">
              <Magnet className="w-12 h-12 text-primary-400" />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-black text-white leading-tight">Mantenimiento de Precisión</h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                Recuerde: Limpiar las caras de los núcleos de los contactores es vital para evitar ruidos y sobrecalentamientos por falta de cierre hermético del circuito magnético.
              </p>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 blur-[60px] rounded-full"></div>
        </div>
      </div>

    </div>
  );
};

export default ElectroimanesView;
