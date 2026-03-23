import React from 'react';
import { Target, Magnet, Zap, BookOpen, Activity, AlertTriangle, ShieldCheck } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import gaussImg from '../../assets/gauss_diagram.png';

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

const LeyGaussView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Ley de Gauss: Fundamentos y Aplicaciones"
      objective="Comprender los principios del flujo electromagnético mediante la Ley de Gauss para analizar el comportamiento de campos en máquinas eléctricas y diagnosticar fugas de flujo."
      onBack={onBack}
      unit="Unidad 1"
      calloutTitle="Base del Electromagnetismo"
      calloutText="La Ley de Gauss es una de las ecuaciones de Maxwell que define cómo el flujo atraviesa superficies cerradas, siendo clave para entender la inexistencia de monopolos magnéticos."
      calloutBadge="Flujo Electromagnético"
    >
      
      {/* 1. Introducción y Fundamentos Teóricos */}
      <CollapsibleSection title="Introducción y Fundamentos" icon={BookOpen} defaultOpen={true}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La <strong className="text-white">Ley de Gauss</strong> es una herramienta esencial para analizar el comportamiento del flujo electromagnético en dispositivos reales. Proporciona una base práctica para la ingeniería al permitir planificar, diagnosticar y mantener sistemas bajo estándares internacionales (Moreno Alfonso, 2006).
          </p>
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6">
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              Forma parte de las <strong className="text-primary-400">Ecuaciones de Maxwell</strong>. En su forma magnética, establece que el flujo neto a través de una superficie cerrada es nulo, lo que implica que las líneas de campo son siempre cerradas y no existen monopolos en la naturaleza.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 2. Formulación Matemática */}
      <CollapsibleSection title="Formulación Matemática" icon={Activity}>
        <div className="space-y-8">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Existen dos aplicaciones fundamentales de esta ley, distinguiendo entre el comportamiento del campo eléctrico y el magnético:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 border border-blue-500/20 p-6 rounded-3xl space-y-4">
              <h4 className="text-blue-400 font-bold uppercase tracking-widest text-xs">Ley de Gauss (Electricidad)</h4>
              <p className="text-2xl font-mono text-white text-center">∮ E · dA = Qint / ε₀</p>
              <p className="text-slate-400 text-xs text-justify">Relaciona el flujo eléctrico total con la carga neta encerrada. Cuantifica cómo las cargas son fuentes o sumideros de campo.</p>
            </div>
            <div className="bg-slate-900/60 border border-indigo-500/20 p-6 rounded-3xl space-y-4">
              <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-xs">Ley de Gauss (Magnetismo)</h4>
              <p className="text-2xl font-mono text-white text-center">∮ B · dA = 0</p>
              <p className="text-slate-400 text-xs text-justify">Establece que no hay "cargas magnéticas" aisladas. Todo lo que sale de un polo norte debe entrar en un polo sur.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <InfoBox color="blue" title="∮ (Integral de superficie)">Sobre una superficie cerrada S.</InfoBox>
            <InfoBox color="orange" title="dA (Vector área diferencial)">Orientado normalmente a la superficie.</InfoBox>
            <InfoBox color="green" title="B (Vector densidad de flujo)">Representa la intensidad del campo magnético.</InfoBox>
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. Aplicación en Máquinas Eléctricas */}
      <CollapsibleSection title="Aplicación en Máquinas Eléctricas" icon={Zap}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed text-lg text-justify">
                El funcionamiento de motores, generadores y transformadores depende del comportamiento del flujo en materiales ferromagnéticos. Según <strong className="text-white">Kosow (1980)</strong>, la Ley de Gauss permite:
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">• Determinar la eficiencia de conversión de energía.</li>
                <li className="flex items-center gap-2">• Analizar pérdidas por histéresis y corrientes parásitas.</li>
                <li className="flex items-center gap-2">• Estudiar la distribución de campos en el entrehierro.</li>
              </ul>
            </div>
            <TechnicalImage 
              src={gaussImg}
              alt="Diagrama de flujo magnético en un estator"
              title="Distribución de Flujo y Densidad en Entrehierro"
              id="IMG_GAUSS_001"
            />
          </div>

          <div className="bg-primary-500/5 border border-primary-500/10 p-6 rounded-2xl">
            <h4 className="text-primary-400 font-bold mb-2 flex items-center gap-2 italic">Diagnóstico de Diseño (Fraile Mora, 2008)</h4>
            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              Facilita la detección de desviaciones del flujo debidas a deterioros mecánicos, como fisuras en el núcleo o fallas en el aislamiento, permitiendo establecer planes de mantenimiento predictivo.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 4. Desarrollo Matemático y Ejemplo Práctico */}
      <CollapsibleSection title="Ejemplo Práctico de Cálculo" icon={Activity}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            En la práctica, se analizan secciones transversales para determinar el flujo útil (Φ) que contribuye a la inducción.
          </p>

          <div className="bg-slate-900/60 border border-white/5 p-8 rounded-3xl space-y-6">
            <div className="space-y-2">
              <h4 className="text-white font-bold flex items-center gap-2"><Target className="w-4 h-4 text-emerald-400" /> Caso: Flujo en el Entrehierro</h4>
              <p className="text-slate-400 text-sm">Se requiere determinar el flujo mágnético útil en un motor síncrono dada una densidad de flujo y un área transversal.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 uppercase font-black">Datos:</span>
                  <span className="text-primary-400 font-mono">B = 1,2 T (Teslas)</span>
                  <span className="text-indigo-400 font-mono">A = 0,01 m²</span>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-slate-500 mb-1">Fórmula:</p>
                  <p className="text-xl font-bold text-white font-mono">Φ = B · A</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <span className="text-xs text-emerald-500 uppercase font-black mb-2">Resultado:</span>
                <span className="text-4xl font-black text-white font-mono">0,012 <span className="text-lg">Wb</span></span>
                <span className="text-[10px] text-slate-500 mt-2 tracking-widest uppercase font-bold text-center">Webers (Flujo Útil)</span>
              </div>
            </div>
            <p className="text-slate-400 text-xs italic text-center">Basado en problemas resueltos de Moreno Alfonso (2006).</p>
          </div>
        </div>
      </CollapsibleSection>

      {/* 5. Relación Interdisciplinar y Riesgos */}
      <CollapsibleSection title="Relación Interdisciplinar y Riesgos" icon={AlertTriangle}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            La Ley de Gauss es el primer paso. El flujo determinado aquí es lo que Faraday utiliza para calcular la tensión inducida (ε) y lo que determina la oposición de Lenz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 glass-morphism rounded-3xl border border-white/5 space-y-3">
              <h4 className="text-red-400 font-bold flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Flujo de Dispersión</h4>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">Cada línea de flujo que se escapa de la carcasa es energía que no produce trabajo útil, manifestándose como calentamiento en partes no activas.</p>
            </div>
            <div className="p-6 glass-morphism rounded-3xl border border-white/5 space-y-3">
              <h4 className="text-orange-400 font-bold flex items-center gap-2"><Zap className="w-4 h-4" /> Interferencia (EMI)</h4>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">Fugas de flujo pueden inducir voltajes en cables de control cercanos (PLCs), causando fallas en la automatización.</p>
            </div>
            <div className="p-6 glass-morphism rounded-3xl border border-white/5 space-y-3">
              <h4 className="text-primary-400 font-bold flex items-center gap-2"><Activity className="w-4 h-4" /> Corrientes de Eje</h4>
              <p className="text-slate-400 text-xs leading-relaxed text-justify">La asimetría del flujo induce voltajes en el eje que dañan los rodamientos por descargas eléctricas.</p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* 6. Perspectiva Global y Bibliografía */}
      <CollapsibleSection title="Formación y Bibliografía" icon={Target}>
        <div className="space-y-6">
          <p className="text-slate-300 text-sm leading-relaxed text-justify">
            El dominio de la Ley de Gauss es indispensable para ingenieros y técnicos que operan según estándares internacionales de eficiencia y seguridad electromagnética.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest text-primary-400">Objetivo Técnico</h4>
              <ul className="text-slate-400 text-xs space-y-2 list-disc pl-5">
                <li>Diagnosticar errores de montaje y cortocircuitos parciales.</li>
                <li>Identificar puntos de fuga de flujo magnético.</li>
                <li>Diseñar soluciones para la mejora de equipos electromagnéticos complejos.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase text-xs tracking-widest text-indigo-400">Bibliografía</h4>
              <ul className="text-slate-400 text-[10px] space-y-2">
                <li>• Moreno Alfonso, N. (2006). <i>Problemas resueltos de tecnología eléctrica</i>. Madrid: Thomson.</li>
                <li>• Kosow, I. L. (1980). <i>Máquinas eléctricas y transformadores</i>. Barcelona: Reverté.</li>
                <li>• Fraile Mora, J. (2008). <i>Máquinas eléctricas</i>. Madrid: McGraw-Hill.</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default LeyGaussView;
