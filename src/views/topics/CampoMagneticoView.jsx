import React from 'react';
import { Target, Magnet, Zap, ShieldAlert } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import campoImg from '../../assets/IMG_CAMP_001.png';

const CampoMagneticoView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Principio del Campo Magnético"
      objective="Visualizar y analizar la geometría y el comportamiento de las líneas de fuerza magnética generadas por imanes permanentes y conductores energizados, para predecir interacciones electromecánicas en equipos industriales."
      onBack={onBack}
      unit="Tema 4"
      calloutTitle="Resumen Técnico"
      calloutText="Un motor utiliza el campo magnético para transformar energía. Si el entrehierro es excesivo por desgaste de rodamiento, las líneas de fuerza se dispersan, reduciendo drásticamente la fuerza del motor."
      calloutBadge="Mantenimiento Industrial"
    >
      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Zap} defaultOpen={true}>
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
              <ShieldAlert className="w-5 h-5 shrink-0" /> Regla de Oro del Campo
            </h3>
            <p className="text-slate-300 leading-relaxed text-justify">
              Un punto crucial es entender que estas líneas <span className="text-white font-bold tracking-tight">siempre forman lazos cerrados</span> (no existen monopolos magnéticos). En un motor, el diseño del estator busca que estas líneas pasen por los dientes del núcleo y atraviesen el entrehierro de la forma más perpendicular posible para maximizar el torque.
            </p>
          </div>

          <TechnicalImage 
            src={campoImg} 
            alt="Líneas de fuerza magnética: Atracción vs Repulsión" 
            title="Representación técnica de interacción de polos"
            id="IMG_CAMP_001"
          />

          <p className="text-slate-300 leading-relaxed text-lg text-justify italic bg-primary-500/5 p-6 rounded-2xl border border-primary-500/20">
            Si el entrehierro es excesivo por desgaste de rodamiento, las líneas de fuerza se dispersan, reduciendo drásticamente la fuerza del motor.
          </p>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default CampoMagneticoView;
