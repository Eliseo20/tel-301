import React from 'react';
import { Target, Magnet, Zap, Gauge, Activity, ShieldAlert } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import ohmMagImg from '../../assets/IMG_OHMMAG_001.png';

const LeyOhmMagneticaView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Ley de Ohm Magnética"
      objective="Calcular y dimensionar circuitos magnéticos utilizando la analogía de la Ley de Ohm eléctrica, permitiendo al técnico evaluar la eficiencia de núcleos en transformadores y motores mediante el concepto de reluctancia."
      onBack={onBack}
      unit="Tema 7"
      calloutTitle="Diagnóstico de Acción"
      calloutText="Entender esta ley permite diagnosticar por qué un contactor zumba o no cierra con fuerza: si hay suciedad o aire en el entrehierro, la reluctancia sube tanto que la bobina no tiene fuerza suficiente."
      calloutBadge="Clave de Mantenimiento"
    >
      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Zap} defaultOpen={true}>
        <div className="space-y-4">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Aunque no todos los técnicos calculan reluctancias a diario, es vital para quienes se dedican al rediseño de bobinados o reparación de núcleos magnéticos. Si un técnico limpia un núcleo de transformador con abrasivos gruesos y aumenta el espacio entre las chapas, está aumentando la "resistencia" al paso del flujo.
          </p>
          <div className="p-6 bg-red-500/5 rounded-2xl border border-red-500/20">
            <p className="text-slate-300 leading-relaxed text-justify">
              Entender esta ley permite diagnosticar por qué un contactor zumba o no cierra con fuerza: si hay suciedad o aire en el entrehierro, la <span className="text-red-400 font-bold">reluctancia</span> sube tanto que la bobina no tiene fuerza suficiente para vencer el resorte, aunque el voltaje sea el correcto.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: FMM y Reluctancia */}
      <CollapsibleSection title="Fuerza Magnetomotriz y Reluctancia" icon={Gauge}>
        <div className="space-y-8">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La Ley de Ohm magnética establece que el flujo magnético (Φ) es directamente proporcional a la Fuerza Magnetomotriz (FMM) e inversamente proporcional a la Reluctancia (ℜ).
          </p>

          <div className="bg-slate-900/80 p-8 rounded-[2rem] border border-primary-500/20 text-center shadow-inner my-8">
            <span className="text-3xl md:text-5xl font-black text-primary-400 font-mono tracking-widest uppercase">ℱ = Φ · ℛ</span>
            <p className="text-xs text-slate-500 mt-4 uppercase tracking-[0.2em] font-bold italic">La ley de Hopkinson o analogía de Ohm</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed text-justify">
                Como técnicos, debemos ver la <span className="text-white font-bold">FMM (N · I)</span> como la "presión" generada por la bobina, y la <span className="text-white font-bold">Reluctancia</span> como la oposición que ofrece el camino (hierro o aire). 
              </p>
              <div className="p-6 bg-primary-500/5 rounded-2xl border border-primary-500/20">
                <h4 className="text-primary-400 font-bold mb-2 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5" /> El Enemigo: El Aire
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm text-justify">
                  La permeabilidad del aire es miles de veces menor que la del acero silicoso; por lo tanto, una mínima separación en las juntas (corrosión o mal armado) dispara la reluctancia.
                </p>
              </div>
            </div>
            
            <TechnicalImage 
              src={ohmMagImg} 
              alt="Analogía entre circuito eléctrico y magnético" 
              title="Circuito eléctrico vs Circuito Magnético"
              id="IMG_OHMMAG_001"
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* 4. Consecuencias en el Mantenimiento */}
      <CollapsibleSection title="Efectos de la Alta Reluctancia" icon={Activity}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Cuando la reluctancia aumenta debido a una anomalía física, la corriente de magnetización de la bobina debe subir para intentar mantener el flujo necesario.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-full bg-red-400/10 text-red-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold">Corriente Elevada</h3>
              <p className="text-slate-400 text-sm">La bobina se calienta excesivamente tratando de "empujar" el flujo a través del aire.</p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
                <Magnet className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold">Pérdida de Fuerza</h3>
              <p className="text-slate-400 text-sm">En frenos electromagnéticos, el disco puede patinar porque el flujo no es suficiente.</p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-full bg-blue-400/10 text-blue-400 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold">Disparo de Protecciones</h3>
              <p className="text-slate-400 text-sm">Especialmente en el arranque si el circuito magnético no está perfectamente cerrado.</p>
            </div>
          </div>

          <p className="text-slate-400 italic text-sm text-center border-t border-white/5 pt-8">
            Un motor con el eje levemente desplazado o un entrehierro irregular consume más corriente en vacío que lo indicado en placa.
          </p>
        </div>
      </CollapsibleSection>
    </TopicLayout>
  );
};

export default LeyOhmMagneticaView;
