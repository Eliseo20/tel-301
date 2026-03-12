import React from 'react';
import { Target, Zap, Activity, BookOpen } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import imgFaraday from '../../assets/IMG_FARADAY_001.png';

const LeyesFaradayView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Leyes de Faraday"
      objective="Calcular la magnitud de la fuerza electromotriz (f.e.m.) inducida en un conductor a partir de la variación del flujo magnético en el tiempo, permitiendo al técnico comprender el origen del voltaje en generadores y transformadores."
      onBack={onBack}
      calloutTitle="Resumen Técnico"
      calloutText="La Ley de Faraday explica la generación de voltaje mediante la variación temporal del flujo magnético."
      calloutBadge="Inducción"
    >
      {/* 2. ¿Por qué es importante para el técnico? */}
      <CollapsibleSection title="¿Por qué es importante para el técnico?" icon={Zap} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          La Ley de Faraday es la "partida de nacimiento" del voltaje. Un técnico de mantenimiento de plantas de generación la aplica cada vez que verifica la salida de un alternador. Si el voltaje de salida es bajo, Faraday te dice que solo hay tres culpables: o el campo magnético está débil (poca corriente de excitación), o la máquina está girando lento (poca velocidad), o hay un problema en las espiras del bobinado. Los técnicos que trabajan con sensores inductivos de velocidad (pick-ups) dependen totalmente de esta ley para entender por qué una señal se debilita cuando el sensor se aleja del engranaje.
        </p>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: La Inducción en Movimiento */}
      <CollapsibleSection title="La Inducción en Movimiento" icon={Activity}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La ley fundamental establece que la f.e.m. inducida (e) es igual a la rapidez con la que cambia el flujo magnético a través de una bobina: e = -N (d&Phi;/dt). Para nosotros en el taller, esto significa que el voltaje no depende solo de "cuánto" magnetismo hay, sino de qué tan rápido cambia.
          </p>
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            En un generador, si el rotor gira a la mitad de su velocidad nominal, el voltaje caerá a la mitad, aunque el magnetismo sea el máximo. Esto es crítico al realizar pruebas de rodaje en motores reparados. Un error común del técnico novato es pensar que un transformador puede funcionar con Corriente Continua (CC); Faraday nos enseña que si el flujo no varía (como en la CC constante), el voltaje inducido es cero, y el devanado simplemente actuará como una estufa hasta quemarse por efecto Joule.
          </p>
          <TechnicalImage
            id="IMG_FARADAY_001"
            src={imgFaraday}
            alt="Experimento de Faraday con imán y bobina"
            title="Principio de Generación de Voltaje"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Consecuencias de fallas relacionadas con Faraday */}
      <CollapsibleSection title="Fallas y Diagnósticos" icon={BookOpen}>
        <div className="space-y-4">
          <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-2xl">
            <h4 className="text-orange-400 font-bold mb-2">Bajo voltaje en generadores</h4>
            <p className="text-slate-300 text-justify">
              Generalmente causado por una velocidad de rotación (RPM) inestable o por un regulador de voltaje (AVR) que no entrega suficiente corriente al campo.
            </p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
            <h4 className="text-red-400 font-bold mb-2">Fallas en transformadores de medida (PT/CT)</h4>
            <p className="text-slate-300 text-justify">
              Si el núcleo está saturado, el flujo ya no cambia linealmente, lo que induce un voltaje deformado que hace que los relés de protección operen mal o que las lecturas de consumo sean erróneas.
            </p>
          </div>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default LeyesFaradayView;
