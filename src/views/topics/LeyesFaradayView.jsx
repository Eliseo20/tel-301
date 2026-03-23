import React from 'react';
import { Target, Zap, Activity, BookOpen, ShieldCheck, Cpu, AlertTriangle, FlaskConical } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import imgFaraday from '../../assets/IMG_FARADAY_001.png';

// Reusable sub-component for InfoBox
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

const LeyesFaradayView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Leyes de Faraday: Inducción y Generación"
      objective="Analizar la fuerza electromotriz (f.e.m.) inducida por variaciones de flujo magnético para comprender el funcionamiento de generadores, motores y transformadores bajo estándares técnicos internacionales."
      onBack={onBack}
      calloutTitle="Origen del Voltaje"
      calloutText="La Ley de Faraday explica cómo la variación temporal del flujo magnético genera una tensión eléctrica, siendo el pilar de la conversión electromecánica de energía."
      calloutBadge="Inducción Electromagnética"
    >
      
      {/* 1. Origen y Planteamiento */}
      <CollapsibleSection title="Origen y Planteamiento" icon={BookOpen} defaultOpen={true}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Michael Faraday descubrió en el siglo XIX que el movimiento o variación de un campo magnético puede inducir una corriente eléctrica. Este hallazgo revolucionario permitió la invención de máquinas eléctricas rotativas y estacionarias (Kosow, 1980).
          </p>
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6">
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              La ley establece que la f.e.m. inducida (ε) es directamente proporcional a la tasa de variación temporal del flujo magnético (dΦ/dt). En términos prácticos, si el flujo no varía (como en Corriente Continua constante), el voltaje inducido es cero.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 2. Definición Formal y Fundamentos Físicos */}
      <CollapsibleSection title="Definición y Fundamentos" icon={Activity}>
        <div className="space-y-8">
          <div className="bg-slate-900/60 border border-primary-500/20 p-8 rounded-3xl text-center shadow-2xl relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10"><Zap className="w-24 h-24" /></div>
             <p className="text-4xl md:text-5xl font-black text-white font-mono relative">
                ε = − <span className="text-primary-400">dΦ</span> / <span className="text-indigo-400">dt</span>
             </p>
             <p className="text-slate-500 text-xs mt-4 uppercase tracking-widest font-bold">Expresión Matemática de Faraday-Lenz</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <InfoBox color="blue" title="Relación con Gauss">
               El flujo magnético (Φ) se define rigurosamente mediante la Ley de Gauss: Φ = ∬S B · dA. Faraday requiere saber cuánto campo atraviesa la superficie para calcular la inducción.
            </InfoBox>
            <InfoBox color="orange" title="Ley de Lenz (Signo Negativo)">
               El signo − indica que la corriente inducida se opone a la variación de flujo que la produce, cumpliendo el principio de conservación de la energía.
            </InfoBox>
          </div>

          <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2"><Cpu className="w-4 h-4 text-primary-400"/> Casos de Inducción</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950/50 rounded-xl border border-white/5">
                <p className="text-primary-300 font-bold text-sm mb-1 uppercase">Por Movimiento</p>
                <p className="text-slate-400 text-xs text-justify">Cuando el conductor se mueve respecto al campo magnético (Generadores).</p>
              </div>
              <div className="p-4 bg-slate-950/50 rounded-xl border border-white/5">
                <p className="text-indigo-300 font-bold text-sm mb-1 uppercase">Por Campo Variable</p>
                <p className="text-slate-400 text-xs text-justify">Cuando el campo varía en el tiempo sobre un conductor fijo (Transformadores).</p>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Análisis Matemático (Maxwell) */}
      <CollapsibleSection title="Análisis Matemático Detallado" icon={FlaskConical}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
             La Ley de Faraday se integra en las <strong className="text-white">Ecuaciones de Maxwell</strong> bajo dos formas que facilitan tanto el análisis de circuitos como el modelado de campos electromagnéticos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-900/60 rounded-3xl border border-blue-500/20 space-y-3">
               <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs">Forma Integral</h4>
               <p className="text-xl font-mono text-white">ε = ∮C E · dl = - dΦ/dt</p>
               <p className="text-slate-500 text-xs">Ideal para analizar circuitos cerrados y tensiones en devanados.</p>
            </div>
            <div className="p-6 bg-slate-900/60 rounded-3xl border border-indigo-500/20 space-y-3">
               <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Forma Diferencial</h4>
               <p className="text-xl font-mono text-white">∇ × E = -∂B/∂t</p>
               <p className="text-slate-500 text-xs">Relaciona el rotacional del campo eléctrico con el cambio del campo magnético.</p>
            </div>
          </div>

          <TechnicalImage
            id="IMG_FARADAY_001"
            src={imgFaraday}
            alt="Experimento de Faraday con imán y bobina"
            title="Principio de Generación y Variación de Flujo"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Aplicación en Máquinas Eléctricas */}
      <CollapsibleSection title="Aplicaciones Industriales" icon={Zap}>
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <InfoBox color="green" title="Generadores Eléctricos">
              Convierten energía mecánica en eléctrica. Al girar el rotor, el flujo varía periódicamente induciendo una f.e.m. alterna de salida.
            </InfoBox>
            <InfoBox color="red" title="Motores (f.c.e.m.)">
              Generan una fuerza contra-electromotriz que se opone a la tensión aplicada conforme aumenta la velocidad, limitando la corriente.
            </InfoBox>
            <InfoBox color="blue" title="Transformadores">
              Dispositivos estáticos que usan flujo variable para inducir voltaje en el secundario: ε₂ = -N₂(dΦ/dt).
            </InfoBox>
          </div>
          
          <div className="p-6 bg-primary-500/5 border border-primary-500/10 rounded-2xl">
             <h4 className="text-primary-400 font-bold mb-2 flex items-center gap-2 italic">Relación de Transformación</h4>
             <p className="text-slate-300 text-sm leading-relaxed text-justify">
                En transformadores ideales: <strong className="font-mono text-white font-bold italic">V₁/N₁ = V₂/N₂</strong>. Esta proporción permite adaptar los niveles de energía a las necesidades industriales globales.
             </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 5. Ejemplos Prácticos y Resolución de Problemas */}
      <CollapsibleSection title="Ejercicios y Diagnóstico" icon={ShieldCheck}>
        <div className="space-y-6">
           {/* Ejemplo 1 */}
           <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2"><Target className="w-4 h-4 text-emerald-400" /> Cálculo de f.e.m. en Bobina</h4>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <p className="text-slate-400 text-xs">Datos: N=500 vueltas, ΔΦ= -0.001 Wb, Δt= 0.2 s</p>
                    <p className="text-sm font-mono text-primary-300 font-bold">ε = -500 * (-0.001 / 0.2)</p>
                 </div>
                 <div className="flex flex-col items-center justify-center bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                    <span className="text-2xl font-black text-white font-mono">2.5 V</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Voltaje Inducido Promedio</span>
                 </div>
              </div>
           </div>

           {/* Ejemplo 2 */}
           <div className="bg-slate-900/60 border border-white/5 p-6 rounded-2xl space-y-4">
              <h4 className="text-white font-bold flex items-center gap-2"><Target className="w-4 h-4 text-primary-400" /> Tensión en Transformador</h4>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <p className="text-slate-400 text-xs">Datos: V₁=220V, N₁=1000, N₂=500</p>
                    <p className="text-sm font-mono text-indigo-300 font-bold">V₂ = 220 * 500 / 1000</p>
                 </div>
                 <div className="flex flex-col items-center justify-center bg-indigo-500/10 rounded-xl p-4 border border-indigo-500/20">
                    <span className="text-2xl font-black text-white font-mono">110 V</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Tensión Secundaria</span>
                 </div>
              </div>
           </div>
        </div>
      </CollapsibleSection>

      {/* 6. Formación Continua y Bibliografía */}
      <CollapsibleSection title="Glosario y Referencias" icon={Target}>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest text-primary-400 border-l-4 border-primary-500 pl-4">Glosario Técnico</h4>
              <ul className="text-slate-400 text-[10px] space-y-1">
                <li>• <strong>f.e.m.:</strong> Tensión eléctrica generada por inducción.</li>
                <li>• <strong>Flujo Magnético:</strong> Medida del campo a través de un área (Wb).</li>
                <li>• <strong>Generador:</strong> Convierte energía mecánica en eléctrica.</li>
                <li>• <strong>Motor:</strong> Convierte energía eléctrica en mecánica.</li>
                <li>• <strong>Transformador:</strong> Dispositivo estático que varía niveles de V/I.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest text-indigo-400 border-l-4 border-indigo-500 pl-4">Bibliografía Recomendada</h4>
              <ul className="text-slate-400 text-[10px] space-y-2">
                <li>• Moreno Alfonso, N. (2006). <i>Problemas resueltos de tecnología eléctrica</i>.</li>
                <li>• Kosow, I. L. (1980). <i>Máquinas eléctricas y transformadores</i>.</li>
                <li>• Fraile Mora, J. (2008). <i>Máquinas eléctricas</i>.</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-xl">
             <p className="text-slate-400 text-xs text-justify italic flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                Un técnico con base científica sólida puede anticipar fallos como picos de corriente y desgaste prematuro por sobrecargas inducidas.
             </p>
          </div>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default LeyesFaradayView;
