import React, { useState } from 'react';
import { ArrowLeft, Target, Magnet, Zap, BookOpen, ChevronDown, ChevronRight, Activity, ShieldAlert } from 'lucide-react';

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

const CampoMagneticoView = ({ onBack }) => {
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
            Tema 4
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Principio del Campo Magnético
          </h1>
        </div>
      </header>

      {/* 1. Objetivo de Aprendizaje */}
      <CollapsibleSection title="Objetivo de Aprendizaje" icon={Target} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          Visualizar y analizar la geometría y el comportamiento de las líneas de fuerza magnética generadas por imanes permanentes y conductores energizados, para predecir interacciones electromecánicas en equipos industriales.
        </p>
      </CollapsibleSection>

      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Zap}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            En terreno, el "principio del campo magnético" se traduce en saber dónde está la fuerza. Un técnico que realiza montaje de tableros de potencia debe entender este principio para evitar fenómenos como el <span className="text-red-400 font-bold">calentamiento por inducción</span> en gabinetes metálicos si pasa los cables de fase de forma incorrecta.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Es fundamental para quien realiza pruebas no destructivas (NDT) mediante partículas magnéticas para detectar grietas en ejes de motores, ya que el campo magnético revela la discontinuidad del material.
          </p>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Líneas de Fuerza */}
      <CollapsibleSection title="Líneas de Fuerza y su Geometría" icon={Magnet}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            El campo magnético no se ve, pero sus efectos son medibles y predecibles. Se define como la zona del espacio donde actúan fuerzas magnéticas. Representamos este campo mediante <span className="text-white font-bold">líneas de fuerza</span> (o líneas de inducción). Como técnicos, debemos visualizar estas líneas como "elásticos" que intentan acortarse y repelerse lateralmente.
          </p>
          
          <div className="p-8 bg-slate-900/60 rounded-3xl border border-white/5 space-y-4">
            <h3 className="text-primary-400 font-bold flex items-center gap-2">
              <ShieldAlert className="w-5 h-5" /> Regla de Oro del Campo
            </h3>
            <p className="text-slate-300 leading-relaxed text-justify">
              Un punto crucial es entender que estas líneas <span className="text-white font-bold tracking-tight">siempre forman lazos cerrados</span> (no existen monopolos magnéticos). En un motor, el diseño del estator busca que estas líneas pasen por los dientes del núcleo y atraviesen el entrehierro de la forma más perpendicular posible para maximizar el torque.
            </p>
          </div>

          <div className="glass-morphism rounded-3xl p-6 border border-primary-500/10">
            <img 
              src="/src/assets/IMG_CAMP_001.png" 
              alt="Líneas de fuerza magnética: Atracción vs Repulsión" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <p className="text-slate-500 text-xs mt-4 italic text-center uppercase tracking-widest">
              ID: IMG_CAMP_001 | Representación técnica de interacción de polos
            </p>
          </div>

          <p className="text-slate-300 leading-relaxed text-lg text-justify italic bg-primary-500/5 p-6 rounded-2xl border border-primary-500/20">
            Si el entrehierro es excesivo por desgaste de rodamiento, las líneas de fuerza se dispersan, reduciendo drásticamente la fuerza del motor.
          </p>
        </div>
      </CollapsibleSection>

    </div>
  );
};

export default CampoMagneticoView;
