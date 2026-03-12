import React from 'react';
import { Target, Zap, ShieldCheck, AlertCircle } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import imgLenz from '../../assets/IMG_LENZ_001.png';

const LeyLenzView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Ley de Lenz"
      objective="Determinar el sentido de la corriente inducida y la polaridad de la f.e.m. para predecir fuerzas de oposición y el comportamiento de sistemas de frenado regenerativo y amortiguamiento magnético."
      onBack={onBack}
      calloutTitle="Resumen Técnico"
      calloutText="Lenz establece que toda corriente inducida crea un campo que se opone a la causa que la genera, siendo la base de la contra-f.e.m."
      calloutBadge="Conservación de Energía"
    >
      {/* 2. ¿Por qué es importante para el técnico? */}
      <CollapsibleSection title="¿Por qué es importante para el técnico?" icon={Zap} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          Lenz es quien nos dice "hacia dónde va la fuerza". Es fundamental para el técnico que instala variadores de frecuencia (VFD) con frenado dinámico. Cuando un motor se apaga pero la carga sigue girando (por inercia), el motor se convierte en generador. La Ley de Lenz explica por qué ese motor ofrece resistencia al giro, permitiendo frenar cargas pesadas (como puentes grúa o ascensores) de forma segura. Sin Lenz, no entenderíamos por qué un motor consume tanta corriente al arrancar (la contra-f.e.m. es mínima en el inicio).
        </p>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: La Oposición de la Naturaleza */}
      <CollapsibleSection title="La Oposición de la Naturaleza" icon={ShieldCheck}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La Ley de Lenz es una declaración de la conservación de la energía: "El sentido de la corriente inducida es tal que se opone a la causa que la produce". Si acercas un imán a una bobina, la bobina creará un campo magnético igual para repelerlo. Si intentas alejarlo, creará uno para retenerlo.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Para el técnico de mantenimiento, esto se manifiesta como la Fuerza Contra-Electromotriz (FCEM). En un motor funcionando, mientras más rápido gira, más voltaje genera "en contra" de la red. Esto es lo que limita la corriente del motor. Si el motor se traba mecánicamente (rotor bloqueado), la FCEM cae a cero y la corriente de la red sube instantáneamente a niveles de cortocircuito, quemando el aislante si las protecciones no actúan en milisegundos.
          </p>
          <TechnicalImage
            id="IMG_LENZ_001"
            src={imgLenz}
            alt="Experimento de Lenz: Imán cayendo en tubo de cobre"
            title="Corrientes de Foucault y Frenado"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Aplicaciones y anomalías de Lenz */}
      <CollapsibleSection title="Aplicaciones y Riesgos Críticos" icon={AlertCircle}>
        <div className="space-y-4">
          <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl">
            <h4 className="text-green-400 font-bold mb-2">Frenos Magnéticos</h4>
            <p className="text-slate-300 text-justify">
              Usados en camiones mineros y trenes. El técnico debe revisar que los discos de cobre/aluminio no tengan grietas, pues esto interrumpe las corrientes de Lenz y anula el frenado.
            </p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
            <h4 className="text-red-400 font-bold mb-2">Calentamiento por Inducción Indeseado</h4>
            <p className="text-slate-300 text-justify">
              Si instalas un cable de una sola fase pasando a través de un agujero individual en una plancha de acero (en lugar de pasar las tres fases juntas), la Ley de Lenz causará que la plancha actúe como una bobina de una sola espira en cortocircuito, calentándose al rojo vivo y fundiendo el cable.
            </p>
          </div>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default LeyLenzView;
