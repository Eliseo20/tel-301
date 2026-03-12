import React from 'react';
import { Target, Zap, Magnet, BookOpen, Activity, Layers } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import hysteresisImg from '../../assets/hysteresis_curve.png';
import laminatedCoreImg from '../../assets/laminated_core.png';

const FerromagnetismoView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Materiales Ferromagnéticos"
      objective="Identificar el comportamiento de materiales como el hierro, cobalto y níquel bajo la influencia de campos magnéticos para seleccionar repuestos adecuados y diagnosticar fallas por saturación o fatiga magnética."
      onBack={onBack}
      calloutTitle="Resumen para Campo"
      calloutText="El mantenimiento preventivo requiere vigilar el calor y el ruido inusual en los núcleos; estos son los primeros síntomas de una fatiga magnética inminente."
      calloutBadge="Clave Técnica"
    >
      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Zap} defaultOpen={true}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            En el ejercicio diario, un técnico de mantenimiento eléctrico o de bobinado debe entender que no cualquier acero sirve para un núcleo. Si reemplazas un perno o una chapa original por una de acero común, puedes provocar que el equipo se <span className="text-red-400 font-bold">sobrecaliente en minutos</span>.
          </p>
          <div className="p-6 bg-primary-500/5 rounded-2xl border border-primary-500/20">
            <p className="text-slate-300 leading-relaxed text-justify">
              Los técnicos que trabajan con <span className="text-primary-400 font-bold">servomotores y variadores de frecuencia</span> son quienes más deben vigilar estas características, ya que la respuesta del material afecta directamente el control de precisión de la máquina.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Permeabilidad y Saturación */}
      <CollapsibleSection title="Permeabilidad y Saturación" icon={Magnet}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Los materiales ferromagnéticos son la "autopista" del flujo magnético. Poseen una <span className="text-white font-bold">alta permeabilidad (μ)</span>, lo que significa que permiten que las líneas de campo pasen por ellos con mucha facilidad en comparación con el aire.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900/60 rounded-2xl border border-white/5 space-y-4 h-full">
              <h3 className="text-primary-400 font-bold flex items-center gap-2">
                <Activity className="w-5 h-5" /> El Límite de Saturación
              </h3>
              <p className="text-slate-300 leading-relaxed text-justify">
                Cuando un núcleo llega a la saturación, por más que aumentes la corriente en la bobina, el flujo ya no aumenta. Para un técnico, esto se traduce en una pérdida drástica de eficiencia y un aumento peligroso de la corriente (amperaje).
              </p>
            </div>
            
            <TechnicalImage 
              src={hysteresisImg}
              alt="Curva de Histéresis B-H"
              title="Gráfico Técnico - Curva de Histéresis"
              id="IMG_FERRO_001"
            />
          </div>
          
          <p className="text-slate-400 italic text-sm border-l-4 border-primary-500/30 pl-4 py-2">
            La saturación puede disparar las protecciones térmicas sin una causa mecánica aparente.
          </p>
        </div>
      </CollapsibleSection>

      {/* 4. La Histéresis y sus Consecuencias */}
      <CollapsibleSection title="La Histéresis y sus Consecuencias" icon={BookOpen}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La histéresis es el "retraso" que sufre el material al magnetizarse y desmagnetizarse. Parte de la energía eléctrica se queda "atrapada" en el núcleo en forma de <span className="text-primary-400 font-bold">magnetismo remanente</span>.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-white font-bold text-xl">Consecuencias de una anomalía:</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-primary-500/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Sobrecalentamiento del núcleo</span>
                    <span className="text-slate-400 text-sm italic text-justify block mt-1">La energía se disipa como calor, degradando el barniz aislante.</span>
                  </div>
                </li>
                <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-primary-500/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Vibración y Ruido (Zumbido)</span>
                    <span className="text-slate-400 text-sm italic text-justify block mt-1">Magnetostricción: el material cambia de forma microscópicamente.</span>
                  </div>
                </li>
                <li className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 group hover:border-primary-500/30 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Magnet className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Pérdida de Torque</span>
                    <span className="text-slate-400 text-sm italic text-justify block mt-1">Reduce la fuerza del par motor, obligando a consumir más corriente.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <TechnicalImage 
              src={laminatedCoreImg}
              alt="Núcleo Laminado vs Sólido"
              title="Eficiencia Energética en Núcleos"
              id="IMG_FERRO_002"
              height="h-full"
            />
          </div>
        </div>
      </CollapsibleSection>
    </TopicLayout>
  );
};

export default FerromagnetismoView;
