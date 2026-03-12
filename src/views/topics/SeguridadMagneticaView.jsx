import React, { useState } from 'react';
import { ArrowLeft, Target, ShieldAlert, Zap, BookOpen, ChevronDown, ChevronRight, Activity, AlertTriangle, EyeOff, Thermometer, ImageIcon } from 'lucide-react';
import segMagImg from '../../assets/IMG_SEG_MAG_001.png';

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

const SeguridadMagneticaView = ({ onBack }) => {
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
            Tema 8
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Seguridad en Entornos <span className="text-primary-500">Magnéticos</span>
          </h1>
        </div>
      </header>

      {/* 1. Objetivo de Aprendizaje */}
      <CollapsibleSection title="Objetivo de Aprendizaje" icon={Target} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          Aplicar protocolos de seguridad industrial específicos para el trabajo con campos magnéticos de alta intensidad, previniendo accidentes por proyección de objetos o interferencias en dispositivos médicos.
        </p>
      </CollapsibleSection>

      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={AlertTriangle}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Esta sección es <span className="text-red-400 font-bold uppercase underline decoration-2 underline-offset-4">obligatoria</span> para todo el personal de planta. No es solo teoría; es supervivencia.
          </p>
          <div className="p-6 bg-red-500/10 rounded-2xl border border-red-500/20">
            <p className="text-slate-300 leading-relaxed text-justify">
              Los técnicos que trabajan cerca de motores de gran potencia o bancos de condensadores están expuestos a campos que pueden convertir una llave inglesa en un <span className="text-white font-bold">proyectil mortal</span>. Ignorar estas normas puede causar desde la destrucción de equipos costosos hasta accidentes fatales si el técnico porta un marcapasos.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: El Peligro Invisible */}
      <CollapsibleSection title="El Peligro Invisible" icon={EyeOff}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg text-justify">
              A diferencia de un cable pelado, el campo magnético no se ve ni se siente hasta que es demasiado tarde. 
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
              <h3 className="text-yellow-400 font-bold flex items-center gap-2 mb-2">
                <Thermometer className="w-5 h-5" /> Calentamiento por Inducción
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed text-justify">
                Los campos variables generan corrientes inducidas. Si un técnico lleva un <span className="text-white font-bold">reloj metálico o anillos</span> cerca de conductores de alta potencia, estos pueden calentarse en segundos, provocando quemaduras severas sin contacto eléctrico directo.
              </p>
            </div>
            <p className="text-slate-300 leading-relaxed text-justify">
              El principal riesgo es el "efecto proyectil": cualquier herramienta de acero al carbono será atraída violentamente hacia el centro del campo de una máquina abierta.
            </p>
          </div>
          
          <TechnicalImage 
            src={segMagImg} 
            alt="Señalética de Seguridad Magnética" 
            title="Normativa ISO de Seguridad Magnética"
            id="IMG_SEG_MAG_001"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Protocolos de Seguridad Esenciales */}
      <CollapsibleSection title="Protocolos de Seguridad" icon={ShieldAlert}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-slate-900/60 rounded-3xl border border-white/5 space-y-4">
            <h3 className="text-primary-400 font-black uppercase text-xs tracking-tighter">01. Zona de Exclusión</h3>
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              Delimitar áreas donde el flujo supere los <span className="text-white font-bold">0.5 mT</span>, restringiendo el paso a personal con dispositivos electrónicos médicos.
            </p>
          </div>
          <div className="p-6 bg-slate-900/60 rounded-3xl border border-white/5 space-y-4">
            <h3 className="text-primary-400 font-black uppercase text-xs tracking-tighter">02. Herramientas Amagnéticas</h3>
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              Usar aleaciones de <span className="text-white font-bold">berilio-cobre o aluminio-bronce</span> que no son atraídas por los imanes en entornos de alta inducción.
            </p>
          </div>
          <div className="p-6 bg-slate-900/60 rounded-3xl border border-white/5 space-y-4">
            <h3 className="text-primary-400 font-black uppercase text-xs tracking-tighter">03. Desmagnetización</h3>
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              Asegurar que los destornilladores no estén magnetizados para evitar dañar sensores de efecto Hall o corromper memorias magnéticas.
            </p>
          </div>
        </div>
      </CollapsibleSection>

    </div>
  );
};

export default SeguridadMagneticaView;
