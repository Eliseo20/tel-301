import React from 'react';
import { Target, Magnet, Zap, Gauge } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import flujoImg from '../../assets/IMG_FLUJO_001.png';

const FlujoMagneticoView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Flujo Magnético"
      objective="Cuantificar la cantidad total de campo magnético (Φ) que atraviesa una superficie dada, considerando la densidad de líneas y el ángulo de incidencia, para evaluar la eficiencia de circuitos magnéticos en transformadores y motores."
      onBack={onBack}
      unit="Tema 5"
      calloutTitle="Resumen Técnico"
      calloutText="El flujo magnético es la 'cantidad de energía' que estamos moviendo. Un técnico especialista en mantenimiento de transformadores debe dominar este concepto para garantizar que la potencia de placa sea la nominal."
      calloutBadge="Mantenimiento Industrial"
    >
      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Zap} defaultOpen={true}>
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
    </TopicLayout>
  );
};

export default FlujoMagneticoView;
