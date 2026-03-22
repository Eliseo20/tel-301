import React, { useState } from 'react';
import { Zap, Activity, ShieldCheck, BookOpen, FlaskConical, AlertTriangle, ChevronDown, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TopicLayout, CollapsibleSection } from '../../components/TopicComponents';

// ─── Reusable sub-components ───────────────────────────────────────────────

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

function SolvedProblem({ question, steps }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-900/60 border border-white/5 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-slate-200 font-semibold text-sm">{question}</span>
        {open
          ? <ChevronDown className="text-primary-400 w-5 h-5 shrink-0" />
          : <ChevronRight className="text-slate-500 w-5 h-5 shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 space-y-2 border-t border-white/5 pt-4">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="text-green-400 w-4 h-4 shrink-0 mt-0.5" />
              <span className="text-slate-300 text-sm" dangerouslySetInnerHTML={{ __html: s }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SelfEvalQuestion({ number, question }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="bg-primary-500/20 text-primary-300 rounded-full w-7 h-7 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">{number}</span>
      <p className="text-slate-300 text-sm leading-relaxed">{question}</p>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────

const TransformadoresGralView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Fundamentos, Mantenimiento y Diagnóstico de Transformadores"
      objective="Del Análisis Teórico al Ensayo de Laboratorio: analizar la constitución, principios de funcionamiento, configuraciones trifásicas, protocolos de mantenimiento y ensayos de caracterización de transformadores para el ejercicio técnico en redes de distribución y potencia."
      onBack={onBack}
      calloutTitle="Máquina Estática Fundamental"
      calloutText="El transformador transfiere energía entre circuitos mediante inducción electromagnética sin partes móviles, siendo el elemento clave de toda red eléctrica."
      calloutBadge="Transformadores"
    >

      {/* ══════════════════════════════════════════════════════════════════
          SECCIÓN 1 — INTRODUCCIÓN
      ═══════════════════════════════════════════════════════════════════ */}
      <CollapsibleSection title="Introducción a la Máquina Estática" icon={BookOpen} defaultOpen={true}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Los transformadores son dispositivos eléctricos fundamentales en la transmisión y distribución de energía
            debido a su capacidad para modificar los niveles de tensión y corriente <span className="text-primary-300 font-semibold">sin
            alterar la frecuencia del sistema</span>. Clasificados como <em>máquinas estáticas</em>, su funcionamiento
            descansa en el principio de la <strong className="text-white">inducción electromagnética</strong>, donde la
            energía se transfiere de un circuito a otro mediante un campo magnético variable en el tiempo, sin que exista
            movilidad relativa entre las partes activas principales.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <InfoBox color="blue" title="Ley de Faraday">
              La tensión inducida en un devanado es proporcional a la rapidez con la que varía el flujo magnético total
              que lo atraviesa: <strong className="text-blue-200">e = −N · dΦ/dt</strong>. Este principio explica cómo
              se genera el voltaje en el secundario del transformador.
            </InfoBox>
            <InfoBox color="purple" title="Ley de Lenz">
              Determina el <em>sentido</em> de la corriente inducida, que siempre se opone a la causa que la produce.
              Es el principio básico del comportamiento dinámico de los transformadores frente a variaciones de carga.
            </InfoBox>
          </div>

          <p className="text-slate-300 leading-relaxed text-justify">
            En la red eléctrica global, los transformadores permiten la <strong className="text-white">elevación de tensiones
            en generación</strong> para minimizar pérdidas en la transmisión y, posteriormente, su <strong className="text-white">reducción
            cerca de los puntos de consumo</strong>, asegurando una entrega eficiente y segura de la energía.
          </p>

          {/* Preguntas de autoevaluación */}
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 space-y-4">
            <h4 className="text-white font-bold flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary-400" /> Preguntas de Autoevaluación</h4>
            <SelfEvalQuestion number="1" question="¿Por qué se consideran los transformadores como máquinas eléctricas estáticas?" />
            <SelfEvalQuestion number="2" question="Explique cómo la Ley de Faraday y la Ley de Lenz intervienen en el funcionamiento de un transformador." />
            <SelfEvalQuestion number="3" question="Describa el papel de los transformadores en la transmisión y distribución de energía eléctrica." />
          </div>
        </div>
      </CollapsibleSection>

      {/* ══════════════════════════════════════════════════════════════════
          SECCIÓN 2 — ANÁLISIS COMPARATIVO
      ═══════════════════════════════════════════════════════════════════ */}
      <CollapsibleSection title="Análisis Comparativo: Transformador Monofásico y Trifásico" icon={Zap}>
        <div className="space-y-8">

          {/* 2a — Monofásico */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white border-l-4 border-primary-500 pl-4">
              Transformador Monofásico — Constitución y Circuito Equivalente
            </h3>
            <p className="text-slate-300 leading-relaxed text-justify">
              El transformador monofásico se compone, principalmente, de un <strong className="text-white">núcleo ferromagnético
              laminado</strong> y dos devanados eléctricos: primario y secundario. El núcleo canaliza el flujo magnético
              y minimiza las pérdidas por corrientes de Foucault, mientras que los devanados, formados por conductores
              enrollados, son los encargados de transferir energía entre los circuitos.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <InfoBox color="blue" title="R₁, R₂ — Resistencias de devanado">
                Pérdidas en cobre (efecto Joule) en los conductores del primario y secundario. Generan calor proporcional a I²·R.
              </InfoBox>
              <InfoBox color="orange" title="X₁, X₂ — Reactancias de dispersión">
                Asociadas a la fuga de flujo que no enlaza ambos devanados. Afectan la regulación de tensión a plena carga.
              </InfoBox>
              <InfoBox color="purple" title="Rc, Xm — Rama de magnetización">
                Modelan las pérdidas en el hierro (histéresis, Foucault) y la corriente necesaria para mantener el flujo en el núcleo.
              </InfoBox>
            </div>

          </div>

          {/* 2b — Trifásico */}
          <div className="space-y-5 pt-4 border-t border-white/5">
            <h3 className="text-xl font-bold text-white border-l-4 border-emerald-500 pl-4">
              Transformador Trifásico — Configuraciones, Desfases y Bancos
            </h3>
            <p className="text-slate-300 leading-relaxed text-justify">
              Los transformadores trifásicos, esenciales para sistemas industriales, pueden construirse como una sola
              unidad o mediante <strong className="text-white">bancos de tres monofásicos</strong>. Sus configuraciones principales son:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <InfoBox color="blue" title="Estrella (Y)">
                Permite punto neutro, útil para repartir cargas desbalanceadas y facilitar la conexión a tierra. El voltaje de fase es V_línea / √3.
              </InfoBox>
              <InfoBox color="orange" title="Delta (Δ)">
                Proporciona trayectoria cerrada para corrientes de secuencia homopolar. Útil para mitigación de armónicos y tolerancia frente a ciertas fallas.
              </InfoBox>
              <InfoBox color="green" title="Zig-Zag">
                Permite el reparto de corrientes de secuencia cero y la mitigación de armónicos triples. Se usa frecuentemente en el lado del neutro de sistemas de distribución.
              </InfoBox>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed text-justify">
              El <strong className="text-white">desfase angular</strong> entre los voltajes primarios y secundarios depende de la
              configuración del conexionado (ej. Dyn11 produce 30° de desfase), influyendo en la coordinación de protecciones
              y la sincronización de sistemas en paralelo.
            </p>

          </div>

          {/* 2c — Diferencias críticas */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-xl font-bold text-white border-l-4 border-orange-500 pl-4">
              Diferencias Críticas: Eficiencia, Costos y Aplicaciones
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-primary-400 font-bold">Aspecto</th>
                    <th className="text-left py-3 px-4 text-blue-400 font-bold">Monofásico</th>
                    <th className="text-left py-3 px-4 text-emerald-400 font-bold">Trifásico</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr><td className="py-3 px-4 font-semibold text-white">Flujo Magnético</td><td className="py-3 px-4">Un solo camino de flujo</td><td className="py-3 px-4">Transferencia continua entre fases, mejor aprovechamiento del núcleo</td></tr>
                  <tr><td className="py-3 px-4 font-semibold text-white">Eficiencia</td><td className="py-3 px-4">Adecuada para bajas potencias</td><td className="py-3 px-4">Mayor eficiencia operativa en alta potencia industrial</td></tr>
                  <tr><td className="py-3 px-4 font-semibold text-white">Costos</td><td className="py-3 px-4">Menor costo unitario; mayor costo si se requieren tres unidades</td><td className="py-3 px-4">Costo inicial mayor, pero menor pérdidas y espacio. Preferible en grandes instalaciones.</td></tr>
                  <tr><td className="py-3 px-4 font-semibold text-white">Aplicaciones</td><td className="py-3 px-4">Consumos residenciales aislados, pequeñas cargas, iluminación</td><td className="py-3 px-4">Sistemas de potencia, distribución industrial, motores y hornos</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Problemas resueltos */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h4 className="text-white font-bold">Problemas Resueltos</h4>
            <SolvedProblem
              question="Problema 1: Dado un transformador monofásico 220V/110V de 2 kVA, calcule la corriente nominal del primario y del secundario."
              steps={[
                "Corriente nominal primaria: I₁ = S / V₁ = 2000 VA / 220 V = <strong>9.09 A</strong>",
                "Corriente nominal secundaria: I₂ = S / V₂ = 2000 VA / 110 V = <strong>18.18 A</strong>",
                "Nota: la relación de transformación a = V₁/V₂ = 220/110 = 2, verifica que I₂/I₁ = a = 2. ✓",
              ]}
            />
            <SolvedProblem
              question="Problema 2: Compare la cantidad de cobre necesario en un banco trifásico vs. un único trifásico integrado."
              steps={[
                "Un banco de tres monofásicos requiere tres núcleos separados y devanados aislados individualmente, lo que aumenta el volumen y peso total.",
                "Un transformador trifásico integrado comparte el circuito magnético entre fases, logrando trayectoria magnética más corta y mejor aprovechamiento del hierro.",
                "Resultado: el trifásico integrado requiere <strong>menos cobre y menor volumen</strong> para igual potencia aparente total, con ahorros de material y espacio típicos del 15–25%.",
              ]}
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* ══════════════════════════════════════════════════════════════════
          SECCIÓN 3 — MANTENIMIENTO
      ═══════════════════════════════════════════════════════════════════ */}
      <CollapsibleSection title="Mantenimiento y Confiabilidad" icon={ShieldCheck}>
        <div className="space-y-6">

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">Fallas Comunes en Transformadores</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <InfoBox color="red" title="Puntos calientes">
                Originados por sobrecarga o mala ventilación. Degradan el aislamiento térmico y estructural de los devanados, acelerando el envejecimiento del papel aislante.
              </InfoBox>
              <InfoBox color="orange" title="Degradación del papel aislante">
                Ocurre por envejecimiento térmico, deterioro por agua y acción química. Reduce drásticamente la vida útil del transformador y su rigidez dieléctrica.
              </InfoBox>
              <InfoBox color="purple" title="Fallas de aisladores (bushings)">
                Los bushings pueden sufrir fracturas, contaminación superficial o defectos internos que llevan a descargas parciales o ruptura dieléctrica completa.
              </InfoBox>
              <InfoBox color="red" title="Cortocircuitos internos">
                Producidos generalmente por movimientos mecánicos tras corrientes de falla, conversiones de energía en calor intenso y corrosión interna entre espiras.
              </InfoBox>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-bold text-white border-l-4 border-green-500 pl-4">Protocolos de Mantenimiento Predictivo</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <Activity className="text-blue-400 w-5 h-5" />
                  <h4 className="text-blue-300 font-bold">Inspección Visual</h4>
                </div>
                <p className="text-slate-400 text-sm">Búsqueda de grietas, fugas de aceite, corrosión externa y problemas mecánicos en herrajes y tanque.</p>
              </div>
              <div className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <FlaskConical className="text-emerald-400 w-5 h-5" />
                  <h4 className="text-emerald-300 font-bold">Análisis DGA</h4>
                </div>
                <p className="text-slate-400 text-sm">Análisis de Gases Disueltos en Aceite: detecta H₂, C₂H₂, C₂H₄ y CH₄, indicadores de descomposición térmica y eléctrica interna.</p>
              </div>
              <div className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="text-orange-400 w-5 h-5" />
                  <h4 className="text-orange-300 font-bold">Termografía</h4>
                </div>
                <p className="text-slate-400 text-sm">Imágenes infrarrojas para localizar puntos calientes no visibles al ojo humano, permitiendo intervención preventiva antes del daño mayor.</p>
              </div>
            </div>

          </div>

          {/* Autoevaluación */}
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 space-y-4">
            <h4 className="text-white font-bold flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary-400" /> Preguntas de Autoevaluación</h4>
            <SelfEvalQuestion number="1" question="Identifique tres síntomas comunes de falla en un transformador y las técnicas recomendadas para su detección temprana." />
            <SelfEvalQuestion number="2" question="Explique la importancia del DGA y la termografía en el mantenimiento predictivo de transformadores de potencia." />
          </div>
        </div>
      </CollapsibleSection>

      {/* ══════════════════════════════════════════════════════════════════
          SECCIÓN 4 — ENSAYOS DE CARACTERIZACIÓN
      ═══════════════════════════════════════════════════════════════════ */}
      <CollapsibleSection title="Ensayos de Caracterización (Foco Principal)" icon={FlaskConical}>
        <div className="space-y-8">

          {/* Ensayo vacío */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-white border-l-4 border-blue-500 pl-4">
              Ensayo de Circuito Abierto (Vacío)
            </h3>
            <p className="text-slate-300 leading-relaxed text-justify">
              Se realiza alimentando el lado de mayor tensión con toda la tensión nominal, manteniendo el secundario
              abierto. Los instrumentos (voltímetro, amperímetro, vatímetro) captan la <strong className="text-white">corriente de
              excitación (I₀)</strong> y la potencia absorbida, mayoritariamente para magnetizar el núcleo y cubrir las
              pérdidas en el hierro (histéresis y corrientes de Foucault).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <InfoBox color="blue" title="Parámetros obtenidos">
                <ul className="space-y-1">
                  <li>• <strong>Rc</strong> = Resistencia de pérdidas en el hierro</li>
                  <li>• <strong>Xm</strong> = Reactancia de magnetización</li>
                  <li>• <strong>P_Fe</strong> = Pérdidas en el hierro (lectura directa del vatímetro)</li>
                </ul>
              </InfoBox>
              <InfoBox color="green" title="Dato técnico">
                Si la potencia medida supera el valor de la placa de datos, indica que el aislamiento entre las láminas del núcleo está deteriorado y las corrientes de Foucault han aumentado.
              </InfoBox>
            </div>
          </div>

          {/* Ensayo cortocircuito */}
          <div className="space-y-5 pt-4 border-t border-white/5">
            <h3 className="text-xl font-bold text-white border-l-4 border-orange-500 pl-4">
              Ensayo de Cortocircuito
            </h3>
            <p className="text-slate-300 leading-relaxed text-justify">
              El devanado de menor tensión se conecta en cortocircuito a través de amperímetro y vatímetro, y se aplica
              una tensión reducida al otro devanado para hacer circular la <strong className="text-white">corriente nominal</strong>.
              Las lecturas de potencia corresponden casi exclusivamente a las pérdidas en cobre, y permiten calcular la
              resistencia y reactancia de cortocircuito (R_eq, X_eq).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <InfoBox color="orange" title="Parámetros obtenidos">
                <ul className="space-y-1">
                  <li>• <strong>R_eq</strong> = Pérdidas óhmicas totales del bobinado</li>
                  <li>• <strong>X_eq</strong> = Reactancia de dispersión total</li>
                  <li>• <strong>P_Cu</strong> = Pérdidas en el cobre a corriente nominal</li>
                </ul>
              </InfoBox>
              <InfoBox color="red" title="Dato clave">
                La impedancia de cortocircuito Z_cc% es fundamental para conectar transformadores en paralelo. Si dos unidades tienen Z_cc% distintas, la de menor impedancia absorberá toda la carga y se sobrecalentará.
              </InfoBox>
            </div>
          </div>

          {/* Problema resuelto */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h4 className="text-white font-bold">Problema Resuelto</h4>
            <SolvedProblem
              question="En un ensayo de circuito abierto, un transformador de 1 kVA da: V = 220 V, I = 0.12 A, W = 22 W. Calcule Rc y Xm."
              steps={[
                "Corriente activa: I_W = P / V = 22 W / 220 V = <strong>0.1 A</strong> (componente asociada a pérdidas en hierro)",
                "Resistencia de pérdidas: Rc = V / I_W = 220 / 0.1 = <strong>2200 Ω</strong>",
                "Corriente reactiva: I_L = √(I² − I_W²) = √(0.12² − 0.1²) = √(0.0144 − 0.01) ≈ <strong>0.066 A</strong>",
                "Reactancia de magnetización: Xm = V / I_L = 220 / 0.066 ≈ <strong>3333 Ω</strong>",
              ]}
            />
          </div>

          {/* Autoevaluación */}
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 space-y-4">
            <h4 className="text-white font-bold flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary-400" /> Preguntas de Autoevaluación</h4>
            <SelfEvalQuestion number="1" question="Describa el objetivo y el procedimiento básico del ensayo de circuito abierto y cortocircuito." />
            <SelfEvalQuestion number="2" question="¿Qué parámetros del circuito equivalente se obtienen en cada ensayo y a qué pérdidas corresponden?" />
          </div>
        </div>
      </CollapsibleSection>

      {/* ══════════════════════════════════════════════════════════════════
          SECCIÓN 5 — GUÍA PRÁCTICA
      ═══════════════════════════════════════════════════════════════════ */}
      <CollapsibleSection title="Guía de Aplicación Práctica (Escala 220V/110V)" icon={Activity}>
        <div className="space-y-6">

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-l-4 border-primary-500 pl-4">Cálculos Previos para Transformadores Monofásicos de Baja Potencia</h3>
            <p className="text-slate-300 leading-relaxed text-justify">
              Antes del ensayo, es clave dimensionar los instrumentos de medida y sumarizar las características nominales.
              Para un transformador de 1 kVA, 220/110 V:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-white/5 p-5 rounded-2xl font-mono">
                <p className="text-slate-400 text-xs mb-2">Corriente primaria:</p>
                <p className="text-primary-300 text-lg font-bold">I₁ = 1000 VA / 220 V = 4.54 A</p>
              </div>
              <div className="bg-slate-900/60 border border-white/5 p-5 rounded-2xl font-mono">
                <p className="text-slate-400 text-xs mb-2">Corriente secundaria:</p>
                <p className="text-emerald-300 text-lg font-bold">I₂ = 1000 VA / 110 V = 9.09 A</p>
              </div>
            </div>
            <InfoBox color="blue" title="Selección de instrumentos">
              Seleccionar amperímetros y vatímetros con rangos adecuados (mínimo 1.5× la corriente nominal). Los vatímetros de desplazamiento electrodinámico son preferidos por su precisión en baja frecuencia de laboratorio.
            </InfoBox>
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-bold text-white border-l-4 border-red-500 pl-4">Medidas de Seguridad en el Laboratorio</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <InfoBox color="red" title="Antes de energizar">
                <ul className="space-y-1 text-sm">
                  <li>• Revisión del aislamiento y estado físico del transformador</li>
                  <li>• Verificar continuidad de tierras de protección</li>
                  <li>• Comprobar rangos de instrumentos antes de conectar</li>
                </ul>
              </InfoBox>
              <InfoBox color="orange" title="EPP obligatorio">
                <ul className="space-y-1 text-sm">
                  <li>• Guantes dieléctricos clase adecuada al voltaje</li>
                  <li>• Protección ocular (antiparras de seguridad)</li>
                  <li>• Conocer y practicar el protocolo de desconexión de emergencia</li>
                </ul>
              </InfoBox>
            </div>
          </div>

          {/* Problema resuelto */}
          <div className="space-y-3 pt-2">
            <h4 className="text-white font-bold">Problema Resuelto</h4>
            <SolvedProblem
              question="Problema: Realice el conexionado para un ensayo de cortocircuito en un transformador 220/110V, usando vatímetro, amperímetro y voltímetro."
              steps={[
                "<strong>Paso 1:</strong> Identifique el devanado de menor tensión (110 V) como el lado a cortocircuitar, asegurando control de corriente más sencillo.",
                "<strong>Paso 2:</strong> Una directamente los terminales del devanado de 110 V a través de un amperímetro de rango ≥ 9.09 A.",
                "<strong>Paso 3:</strong> Inserte el vatímetro en la línea del devanado de 220 V (bobina de corriente en serie, bobina de tensión en paralelo con los terminales).",
                "<strong>Paso 4:</strong> Conecte el voltímetro en paralelo con los terminales del devanado de 220 V.",
                "<strong>Paso 5:</strong> Alimente el devanado de 220 V, incrementando la tensión paulatinamente (desde 0 V) hasta que el amperímetro marque la corriente nominal (≈ 4.54 A).",
                "<strong>Paso 6:</strong> Lea el vatímetro (pérdidas en cobre P_Cu) y el voltímetro (tensión de cortocircuito V_cc, que será mucho menor a 220 V, típicamente 5–10%).",
              ]}
            />
          </div>

          {/* Autoevaluación */}
          <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-6 space-y-4">
            <h4 className="text-white font-bold flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary-400" /> Preguntas de Autoevaluación</h4>
            <SelfEvalQuestion number="1" question="¿Qué aspectos de seguridad eléctrica debe considerar antes y durante el ensayo en laboratorio?" />
            <SelfEvalQuestion number="2" question="Enumere los pasos y justifique la elección del devanado para alimentar o cortocircuitar en cada tipo de ensayo." />
          </div>
        </div>
      </CollapsibleSection>

      {/* ══════════════════════════════════════════════════════════════════
          SECCIÓN 6 — BIBLIOGRAFÍA
      ═══════════════════════════════════════════════════════════════════ */}
      <CollapsibleSection title="Bibliografía" icon={BookOpen}>
        <div className="space-y-3">
          {[
            { num: 1, ref: 'Chapman, Stephen. Máquinas Eléctricas. (6ª Edición) McGraw-Hill Education, 2012.' },
            { num: 2, ref: 'Fitzgerald, A. E., & Kingsley, C. Máquinas Eléctricas. (6ª Edición) McGraw-Hill, 2003.' },
            { num: 3, ref: 'Moreno Alfonso, Narciso. Problemas resueltos de tecnología eléctrica. Thomson, 2006.' },
            { num: 4, ref: 'Kosow, Irving L. Máquinas eléctricas y transformadores. Reverté, D.L. 1980.' },
            { num: 5, ref: 'Fraile Mora, Jesús. Máquinas eléctricas. McGraw-Hill/Interamericana de España, 2008.' },
          ].map(({ num, ref }) => (
            <div key={num} className="flex gap-4 items-start p-4 bg-slate-900/40 rounded-xl border border-white/5">
              <span className="text-primary-500 font-black text-sm shrink-0">[{num}]</span>
              <p className="text-slate-400 text-sm leading-relaxed">{ref}</p>
            </div>
          ))}

          <div className="mt-6 p-5 bg-primary-500/5 border border-primary-500/20 rounded-2xl">
            <p className="text-slate-300 text-sm leading-relaxed text-center italic">
              Este documento académico está alineado con los aprendizajes esperados y cubre los criterios de evaluación
              requeridos para la formación en operación y mantenimiento de transformadores. Se invita al estudiantado a
              experimentar en laboratorio, consolidando la teoría mediante práctica segura y guiada.
            </p>
          </div>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default TransformadoresGralView;
