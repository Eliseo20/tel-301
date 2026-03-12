import React from 'react';
import { Target, Zap, Magnet, BookOpen, Cpu, AlertTriangle } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import solenoidImg from '../../assets/solenoid.png';

const ElectroimanesView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Funcionamiento de Electroimanes"
      objective="Analizar el funcionamiento de solenoides y bobinas de accionamiento para realizar el mantenimiento de contactores, frenos electromagnéticos y válvulas de control."
      onBack={onBack}
      calloutTitle="Mantenimiento de Precisión"
      calloutText="Limpiar las caras de los núcleos de los contactores es vital para evitar ruidos y sobrecalentamientos por falta de cierre hermético del circuito magnético."
      calloutBadge="Clave Técnica"
    >
      {/* 2. Importancia para el Técnico */}
      <CollapsibleSection title="Importancia para el Técnico" icon={Cpu} defaultOpen={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-slate-300 leading-relaxed text-lg text-justify">
              El electroimán es el componente más común en los sistemas de control industrial. El técnico de automatización y control lo utiliza a diario en <span className="text-primary-400 font-bold">relés y solenoides</span>.
            </p>
            <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-start gap-3">
              <AlertTriangle className="text-orange-400 w-6 h-6 shrink-0 mt-1" />
              <p className="text-sm text-slate-300 italic text-justify">
                Una mala conexión o un voltaje incorrecto puede causar que el núcleo no "pegue" bien, generando un arco eléctrico que destruye los contactos.
              </p>
            </div>
          </div>
          <div className="p-6 bg-slate-900/60 rounded-3xl border border-white/5 space-y-4">
            <h3 className="text-white font-bold flex items-center gap-2 underline decoration-primary-500 underline-offset-4">Aplicaciones en Terreno</h3>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">• Contactores Industriales</li>
              <li className="flex items-center gap-2">• Frenos de Grúas</li>
              <li className="flex items-center gap-2">• Electroválvulas de Neumática</li>
              <li className="flex items-center gap-2">• Relés de Maniobra</li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Fuerza Magnetomotriz (FMM) */}
      <CollapsibleSection title="Fuerza Magnetomotriz (FMM)" icon={Zap}>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6">
              <p className="text-slate-300 leading-relaxed text-lg text-justify">
                Un electroimán genera magnetismo mediante el paso de corriente por un conductor enrollado. Su fuerza depende de dos factores críticos:
              </p>
              <div className="bg-slate-900/80 p-6 rounded-[2rem] border border-primary-500/20 text-center shadow-inner">
                <span className="text-3xl font-black text-primary-400 font-mono tracking-widest uppercase">FMM = N · I</span>
                <p className="text-xs text-slate-500 mt-2 uppercase tracking-[0.2em] font-bold">N: Número de Espiras | I: Intensidad (Ampers)</p>
              </div>
              <p className="text-slate-300 leading-relaxed text-justify">
                Si un solenoide pierde fuerza, generalmente es por un <span className="text-red-400 font-bold">cortocircuito entre espiras</span> que reduce el número efectivo de vueltas, o por una caída de tensión en la línea.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <TechnicalImage 
                src={solenoidImg}
                alt="Sección transversal de un solenoide"
                title="Corte Técnico de Solenoide"
                id="IMG_ELECTRO_001"
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 4. El Problema Crítico: Espira de Sombra */}
      <CollapsibleSection title="La Espira de Sombra" icon={BookOpen}>
        <div className="space-y-6">
          <div className="p-6 bg-primary-600/10 border-l-4 border-primary-500 rounded-r-2xl">
             <h3 className="text-white font-black text-xl mb-2 flex items-center gap-2">
                <AlertTriangle className="text-primary-400 shrink-0" /> El Anillo de Desfasaje
             </h3>
             <p className="text-slate-300 leading-relaxed text-justify">
                En electroimanes de <span className="text-primary-300 font-bold uppercase">Corriente Alterna</span>, el flujo pasa por cero 100 o 120 veces por segundo. Sin la espira de sombra (un pequeño anillo de cobre), el núcleo se soltaría y volvería a pegar en cada ciclo.
             </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-8 glass-morphism rounded-3xl border border-red-500/10 space-y-4">
                <h4 className="text-red-400 font-bold flex items-center gap-2">Síntoma de Falla:</h4>
                <p className="text-slate-200 text-3xl font-black italic tracking-tighter">"ZUMBIDO VIOLENTO"</p>
                <p className="text-slate-400 text-sm leading-relaxed text-justify">
                   Si el anillo de cobre se rompe, el electroimán vibrará violentamente a 100 o 120 Hz, provocando un ruido ensordecedor y el desgaste prematuro de las piezas mecánicas de impacto.
                </p>
             </div>
             <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   <p className="text-slate-300">Evita el "castañeo" del contactor.</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   <p className="text-slate-300">Genera un flujo magnético desfasado.</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                   <p className="text-slate-300">Absorbe vibraciones mecánicas.</p>
                </div>
             </div>
          </div>
        </div>
      </CollapsibleSection>
    </TopicLayout>
  );
};

export default ElectroimanesView;
