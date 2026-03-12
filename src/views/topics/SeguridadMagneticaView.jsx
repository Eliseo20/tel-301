import React from 'react';
import { Target, ShieldAlert, Zap, AlertTriangle, EyeOff, Thermometer } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import segMagImg from '../../assets/IMG_SEG_MAG_001.png';

const SeguridadMagneticaView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Seguridad en Entornos Magnéticos"
      objective="Aplicar protocolos de seguridad industrial específicos para el trabajo con campos magnéticos de alta intensidad, previniendo accidentes por proyección de objetos o interferencias en dispositivos médicos."
      onBack={onBack}
      unit="Tema 8"
      calloutTitle="Protocolo de Vida"
      calloutText="Esta sección es OBLIGATORIA para todo el personal. Ignorar estas normas puede causar desde la destrucción de equipos costosos hasta accidentes fatales."
      calloutBadge="Urgencia Técnica"
    >
      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={AlertTriangle} defaultOpen={true}>
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
                <Thermometer className="w-5 h-5 shrink-0" /> Calentamiento por Inducción
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
    </TopicLayout>
  );
};

export default SeguridadMagneticaView;
