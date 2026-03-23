import React from 'react';
import { Target, Zap, ShieldCheck, AlertCircle, BookOpen, Activity, FlaskConical } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import imgLenz from '../../assets/IMG_LENZ_001.png';

// Reusable sub-component for InfoBox (matching TransformadoresGralView style)
function InfoBox({ color = 'blue', title, children }) {
  const palette = {
    blue:  { border: 'border-blue-500/30',   bg: 'bg-blue-500/10',   head: 'text-blue-400'   },
    green: { border: 'border-green-500/30',  bg: 'bg-green-500/10',  head: 'text-green-400'  },
    orange:{ border: 'border-orange-500/30', bg: 'bg-orange-500/10', head: 'text-orange-400' },
    red:   { border: 'border-red-500/30',    bg: 'bg-red-500/10',    head: 'text-red-400'    },
    purple:{ border: 'border-purple-500/30', bg: 'bg-purple-500/10', head: 'text-purple-400' },
  };
  const p = palette[color] || palette.blue;
  return (
    <div className={`${p.bg} border ${p.border} p-5 rounded-2xl`}>
      {title && <h4 className={`${p.head} font-bold mb-2`}>{title}</h4>}
      <div className="text-slate-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

const LeyLenzView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Ley de Lenz: Análisis y Aplicaciones"
      objective="Analizar el sentido de la corriente inducida y la relevancia de la Ley de Lenz como pilar de la inducción electromagnética y la conservación de la energía en máquinas eléctricas."
      onBack={onBack}
      calloutTitle="Resumen Académico"
      calloutText="La Ley de Lenz establece que toda corriente inducida genera un campo magnético que se opone a la causa que la produce, garantizando el principio de conservación de la energía."
      calloutBadge="Conservación de Energía"
    >
      
      {/* 1. Introducción y Contextualización */}
      <CollapsibleSection title="Introducción y Contextualización" icon={BookOpen} defaultOpen={true}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            En el campo del mantenimiento y reparación de máquinas eléctricas, la <strong className="text-white">Ley de Lenz</strong> constituye un pilar esencial formulado en el siglo XIX por Heinrich Lenz. Describe el sentido de la corriente inducida en circuitos sometidos a variaciones de flujo magnético, siendo fundamental para el diseño, funcionamiento y mantenimiento de una amplia gama de equipos.
          </p>
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6">
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              Se enmarca dentro de la inducción electromagnética junto con la Ley de Faraday y la Ley de Gauss. Su importancia radica en predecir el comportamiento de sistemas eléctricos y fundamentar el principio de conservación de la energía, determinando la dirección de la corriente inducida (Kosow, 1980; Fraile Mora, 2008).
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 2. Fundamento Físico y Expresión Matemática */}
      <CollapsibleSection title="Fundamento Físico y Expresión Matemática" icon={Activity}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La expresión matemática de la Ley de Lenz es una extensión cualitativa de la Ley de Faraday, introduciendo un signo negativo que indica la oposición al cambio de flujo.
          </p>
          
          <div className="flex justify-center my-8">
            <div className="bg-slate-900/60 border border-primary-500/30 p-8 rounded-3xl shadow-2xl relative group">
              <div className="absolute -inset-1 bg-primary-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition"></div>
              <p className="text-4xl md:text-5xl font-black text-white font-mono relative">
                ε = − <span className="text-primary-400">dΦ</span> / <span className="text-indigo-400">dt</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <InfoBox color="blue" title="ε (f.e.m. inducida)">
              Fuerza electromotriz generada en el circuito, proporcional a la rapidez del cambio del flujo magnético.
            </InfoBox>
            <InfoBox color="orange" title="Signo Negativo (−)">
              Corresponde precisamente a la Ley de Lenz, indicando que el efecto se opone a la causa original.
            </InfoBox>
          </div>
          <p className="text-slate-300 text-sm italic text-center">
            "La corriente inducida fluye en el sentido tal que su campo magnético se opone a la variación del flujo original."
          </p>
        </div>
      </CollapsibleSection>

      {/* 3. Implicaciones Físicas y Conservación de la Energía */}
      <CollapsibleSection title="Conservación de la Energía" icon={ShieldCheck}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La oposición al cambio obedece al principio de conservación de la energía. Si el sentido de la corriente favoreciera el cambio, se crearía energía de la nada, violando las leyes termodinámicas (Fraile Mora, 2008). Por ello, se requiere un trabajo externo (gasto energético) para producir la variación de flujo.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-500/10 border border-primary-500/20 p-6 rounded-2xl">
              <h4 className="text-primary-400 font-bold mb-2">Acción de Acercamiento</h4>
              <p className="text-slate-300 text-sm">Al acercar un polo Norte, la corriente genera un polo Norte para repeler la penetración.</p>
            </div>
            <div className="bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-2xl">
              <h4 className="text-indigo-400 font-bold mb-2">Acción de Retiro</h4>
              <p className="text-slate-300 text-sm">Al alejar el imán, la corriente genera un polo opuesto (Sur) tratando de mantener el flujo anterior.</p>
            </div>
          </div>

          <TechnicalImage
            id="IMG_LENZ_001"
            src={imgLenz}
            alt="Experimento de Lenz: Imán cayendo en tubo de cobre"
            title="Corrientes de Foucault y Frenado Magnético"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Aplicaciones en Máquinas Eléctricas */}
      <CollapsibleSection title="Aplicaciones en Máquinas Eléctricas" icon={Zap}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La Ley de Lenz es crítica para el diagnóstico y operación segura de equipos industriales.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <InfoBox color="green" title="Generadores Eléctricos">
              Crea un momento magnético opuesto al movimiento, exigiendo un torque externo para la conversión de energía mecánica a eléctrica.
            </InfoBox>
            <InfoBox color="red" title="Motores (f.c.e.m.)">
              Genera la fuerza contra-electromotriz que limita la corriente una vez en marcha, protegiendo los devanados.
            </InfoBox>
            <InfoBox color="blue" title="Transformadores">
              La corriente secundaria genera un flujo opuesto que estabiliza el aparato y evita el sobrecalentamiento excesivo del núcleo.
            </InfoBox>
            <InfoBox color="purple" title="Frenado de Foucault">
              Utilizado en trenes y cintas transportadoras, donde las corrientes de Lenz disipan energía cinética en forma de calor para detener el movimiento.
            </InfoBox>
          </div>

          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl mt-4">
            <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Riesgo Técnico: Calentamiento Indeseado
            </h4>
            <p className="text-slate-300 text-sm text-justify">
              Si se pasan cables de fase individualmente por orificios de planchas metálicas, la Ley de Lenz inducirá corrientes de Foucault masivas en la plancha, pudiendo fundir el aislamiento y causar incendios.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 5. Ejemplos Prácticos y Resolución de Problemas */}
      <CollapsibleSection title="Diagnóstico y Ejemplos Prácticos" icon={FlaskConical}>
        <div className="space-y-4">
          <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl space-y-4">
            <h4 className="text-white font-bold border-b border-white/10 pb-2">Ejemplo de Laboratorio</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="bg-primary-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">1</span>
                <p className="text-slate-300 text-sm"><strong>Situación:</strong> Se acerca un polo Norte a una bobina conectada a un amperímetro.</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">2</span>
                <p className="text-slate-300 text-sm"><strong>Respuesta:</strong> El flujo aumenta, la bobina genera un polo Norte enfrentado para oponerse. La corriente fluye según la regla de la mano derecha de Maxwell.</p>
              </div>
              <div className="flex gap-3">
                <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">3</span>
                <p className="text-slate-300 text-sm"><strong>Dato Técnico:</strong> En transformadores, se laminan los núcleos para mitigar el sobrecalentamiento por corrientes de Foucault (Ley de Lenz indeseada).</p>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 6. Criterios de Evaluación y Bibliografía */}
      <CollapsibleSection title="Formación y Referencias" icon={Target}>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase text-sm tracking-widest border-l-4 border-primary-500 pl-4">Criterios de Evaluación</h4>
              <ul className="text-slate-400 text-sm space-y-2 list-disc pl-5">
                <li>Entender el flujo y los efectos de su variación.</li>
                <li>Aplicar Leyes de Faraday y Lenz con rigor formal.</li>
                <li>Resolver problemas de inducción previniendo errores de sentido.</li>
                <li>Demostrar competencias en el diagnóstico de sistemas eléctricos globales.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase text-sm tracking-widest border-l-4 border-indigo-500 pl-4">Bibliografía Recomendada</h4>
              <ul className="text-slate-400 text-xs space-y-2">
                <li>• Moreno Alfonso, N. (2006). <i>Problemas resueltos de tecnología eléctrica</i>.</li>
                <li>• Kosow, I. L. (1980). <i>Máquinas eléctricas y transformadores</i>.</li>
                <li>• Fraile Mora, J. (2008). <i>Máquinas eléctricas</i>.</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default LeyLenzView;
