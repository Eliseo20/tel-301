import React from 'react';
import { Target, Magnet, Zap, BookOpen, Cpu, AlertTriangle } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import gaussImg from '../../assets/gauss_diagram.png';

const LeyGaussView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Flujo Electromagnético: Ley de Gauss"
      objective="Comprender la naturaleza cerrada de las líneas de flujo magnético para diferenciar el comportamiento del campo magnético frente al eléctrico, facilitando el diagnóstico de fugas de flujo en carcasas de máquinas."
      onBack={onBack}
      unit="Unidad 1"
      calloutTitle="Diagnóstico Avanzado"
      calloutText="Si detecta calentamiento excesivo en las tapas laterales del motor, investigue el flujo de dispersión. La Ley de Gauss es su herramienta teórica para justificar el rediseño de blindajes."
      calloutBadge="Mantenimiento Predictivo"
    >
      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Cpu} defaultOpen={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed text-lg text-justify">
              Este concepto parece abstracto, pero para el técnico de mantenimiento predictivo y análisis de vibraciones, es la base de por qué existen los flujos de dispersión. Si un técnico mide magnetismo en la carcasa exterior de un motor, la Ley de Gauss le explica que ese flujo "se está escapando" del núcleo.
            </p>
            <div className="p-4 bg-primary-500/10 border border-primary-500/30 rounded-2xl flex items-start gap-3">
              <Zap className="text-primary-400 w-6 h-6 shrink-0 mt-1" />
              <p className="text-sm text-slate-300 italic text-justify">
                Es vital para quienes instalan sensores de flujo magnético para detectar barras rotas en el rotor de un motor de inducción sin necesidad de desarmarlo.
              </p>
            </div>
          </div>
          <div className="p-6 bg-slate-900/60 rounded-3xl border border-white/5 space-y-4">
            <h3 className="text-white font-bold flex items-center gap-2 underline decoration-primary-500 underline-offset-4">Aplicaciones en Terreno</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">• Detección de barras rotas en rotores</li>
              <li className="flex items-center gap-2">• Análisis de flujos de dispersión</li>
              <li className="flex items-center gap-2">• Diagnóstico de fugas en carcasas</li>
              <li className="flex items-center gap-2">• Medición de magnetismo residual</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Inexistencia del Monopolo */}
      <CollapsibleSection title="Inexistencia del Monopolo" icon={Magnet}>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg text-justify">
                La Ley de Gauss para el magnetismo establece que el flujo magnético neto a través de cualquier superficie cerrada es siempre cero (∮ B · dA = 0). En términos prácticos para un técnico: todo lo que sale de un polo norte debe entrar en un polo sur.
              </p>
              <div className="bg-slate-900/80 p-6 rounded-[2rem] border border-primary-500/20 text-center shadow-inner">
                <span className="text-3xl font-black text-primary-400 font-mono tracking-widest uppercase">∮ B · dA = 0</span>
                <p className="text-xs text-slate-500 mt-2 uppercase tracking-[0.2em] font-bold">Flujo Neto en Superficie Cerrada</p>
              </div>
              <p className="text-slate-300 leading-relaxed text-justify">
                No existen "cargas magnéticas" aisladas como ocurre con la electricidad (donde sí hay electrones sueltos). En una máquina ideal, todo el flujo debería circular por el hierro del estator y el rotor. Sin embargo, en la práctica existe el flujo de dispersión.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <TechnicalImage 
                src={gaussImg}
                alt="Diagrama de flujo magnético en un estator"
                title="Flujo de Dispersión y Ley de Gauss"
                id="IMG_GAUSS_001"
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 4. Consecuencias de fallas relacionadas */}
      <CollapsibleSection title="Consecuencias de Fugas de Flujo" icon={AlertTriangle}>
        <div className="space-y-6">
          <div className="p-6 bg-red-600/10 border-l-4 border-red-500 rounded-r-2xl">
             <h3 className="text-white font-black text-xl mb-2 flex items-center gap-2">
                <AlertTriangle className="text-red-400 shrink-0" /> Impacto en la Operación
             </h3>
             <p className="text-slate-300 leading-relaxed text-justify">
                Este flujo de dispersión no atraviesa el entrehierro y, por tanto, no produce trabajo útil. Como técnicos, detectamos esto mediante el calentamiento de las partes metálicas no activas del motor.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-6 glass-morphism rounded-3xl border border-white/5 space-y-3">
                <h4 className="text-primary-400 font-bold">EMI (Interferencia)</h4>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">
                   El flujo que se escapa puede inducir voltajes no deseados en cables de control cercanos, provocando falsos disparos en PLCs o sensores.
                </p>
             </div>
             <div className="p-6 glass-morphism rounded-3xl border border-white/5 space-y-3">
                <h4 className="text-primary-400 font-bold">Corrientes de eje</h4>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">
                   El flujo asimétrico induce voltajes en el eje, que buscan descarga a través de los rodamientos, causando "pitting" y fallas catastróficas.
                </p>
             </div>
             <div className="p-6 glass-morphism rounded-3xl border border-white/5 space-y-3">
                <h4 className="text-primary-400 font-bold">Baja Eficiencia</h4>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">
                   Cada línea de flujo que no cruza el entrehierro es energía eléctrica que pagas pero que no se convierte en movimiento.
                </p>
             </div>
          </div>
        </div>
      </CollapsibleSection>
    </TopicLayout>
  );
};

export default LeyGaussView;
