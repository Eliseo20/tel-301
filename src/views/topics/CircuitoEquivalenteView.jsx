import React from 'react';
import { Target, Zap, Activity, AlertTriangle } from 'lucide-react';
import { TopicLayout, CollapsibleSection, TechnicalImage } from '../../components/TopicComponents';

import imgCirEq from '../../assets/IMG_CIR_EQ_001.png';

const CircuitoEquivalenteView = ({ onBack }) => {
  return (
    <TopicLayout
      title="Circuito Equivalente de un Transformador"
      objective="Modelar el comportamiento eléctrico de un transformador real mediante un circuito de parámetros concentrados, permitiendo al técnico predecir caídas de tensión, corrientes de magnetización y eficiencia bajo diferentes condiciones de carga."
      unit="Unidad Avanzada: Diagnóstico y Análisis"
      onBack={onBack}
      calloutTitle="Resumen Técnico"
      calloutText="El circuito equivalente nos permite 'ver' las pérdidas separando las del cobre (rama serie) de las del hierro (rama paralelo)."
      calloutBadge="Análisis Avanzado"
    >
      {/* 2. ¿Por qué es importante para el técnico? */}
      <CollapsibleSection title="¿Por qué es importante para el técnico?" icon={Zap} defaultOpen={true}>
        <p className="text-slate-300 leading-relaxed text-lg text-justify">
          En el día a día, el técnico de proyectos o de control de calidad utiliza el circuito equivalente para entender por qué, aunque el transformador sea de 380V, en las bornes de la máquina final solo llegan 360V cuando hay mucha carga. El circuito equivalente nos permite separar las pérdidas "del cobre" de las "del hierro" y entender el efecto de la reactancia. Para un técnico que configura variadores de frecuencia o sistemas de transferencia automática, conocer la impedancia porcentual (Z%) —que deriva directamente de este circuito— es vital para calcular las corrientes de cortocircuito y ajustar las protecciones para que no se fundan los cables antes de que actúe el interruptor.
        </p>
      </CollapsibleSection>

      {/* 3. Desarrollo Técnico: Anatomía del Modelo Eléctrico */}
      <CollapsibleSection title="Anatomía del Modelo Eléctrico" icon={Activity}>
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed text-lg text-justify">
            Un transformador real no es perfecto. Para analizarlo, los técnicos "referimos" todos los valores a un solo lado (usualmente al primario) para crear un circuito eléctrico continuo. Este modelo se compone de dos ramas principales que representan fenómenos físicos distintos:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5">
              <h4 className="text-emerald-400 font-bold mb-3">Rama Serie (Req y Xeq)</h4>
              <p className="text-slate-300 text-sm text-justify">
                Aquí modelamos el cable de cobre y el flujo de dispersión. La Req representa la resistencia óhmica de los devanados que causa el calor. La Xeq es fundamental: representa el magnetismo que "se escapa" y no llega al otro devanado. Una Xeq alta significa mala regulación; el voltaje caerá mucho al exigir corriente.
              </p>
            </div>
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-white/5">
              <h4 className="text-blue-400 font-bold mb-3">Rama Paralelo o de Excitación (Rc y Xm)</h4>
              <p className="text-slate-300 text-sm text-justify">
                Esta rama representa lo que sucede en el núcleo de hierro. La Rc modela las pérdidas por calor en las chapas (Foucault e Histéresis), y la Xm representa la corriente necesaria para crear el campo magnético. Esta rama siempre consume energía (consumo en vacío).
              </p>
            </div>
          </div>
          <TechnicalImage
            id="IMG_CIR_EQ_001"
            src={imgCirEq}
            alt="Diagrama de circuito eléctrico profesional de un transformador real"
            title="Circuito Equivalente Referido al Primario"
          />
        </div>
      </CollapsibleSection>

      {/* 4. Análisis de anomalías mediante el modelo */}
      <CollapsibleSection title="Análisis Predictivo de Anomalías" icon={AlertTriangle}>
        <div className="space-y-4">
          <div className="bg-orange-500/10 border border-orange-500/20 p-6 rounded-2xl">
            <h4 className="text-orange-400 font-bold mb-2">Envejecimiento de devanados</h4>
            <p className="text-slate-300 text-justify">
              Si al medir la resistencia de los devanados notamos que Req ha aumentado respecto a los valores de fábrica, es señal de corrosión en las conexiones o recalentamiento que ha reducido la sección efectiva del cobre.
            </p>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
            <h4 className="text-red-400 font-bold mb-2">Deformación del núcleo</h4>
            <p className="text-slate-300 text-justify">
              Un cambio en los valores de la rama paralelo (Xm) después de un cortocircuito externo indica que las chapas del núcleo se han movido o deformado mecánicamente, alterando el circuito magnético de forma permanente.
            </p>
          </div>
        </div>
      </CollapsibleSection>

    </TopicLayout>
  );
};

export default CircuitoEquivalenteView;
